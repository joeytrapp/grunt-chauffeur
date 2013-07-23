module.exports = function(grunt) {
  var chauffeur = require('chauffeur'),
      lockable = require('../lib/lockable'),
      desc = 'Start a dev server that handles test runner url and proxies requests',

  grunt.registerMultiTask('chauffeur', desc, function() {
    var lockName = this.name + '.lock', done;

    // Check user supplied data for a name for the lock file
    // to support multiple lockable chauffeur servers
    if (this.data.locks) {
      lockName = this.data.locks.toString();
    }

    if (this.flags.lock) {
      lockable.lock(lockName);
      return;
    }

    if (this.flags.unlock) {
      lockable.unlock(lockName);
      return;
    }

    // Wait to signify async until app has not returned
    done = this.async();

    this.data.before = function(app) {
      lockable.attach(app, lockName);
    };

    chauffeur(this.data, function() {
      grunt.log.write("Dev server running on port " + this.data.port + "\n");
      done();
    }.bind(this));
  });
};

