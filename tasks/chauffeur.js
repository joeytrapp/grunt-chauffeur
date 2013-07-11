module.exports = function(grunt) {
  var chauffeur = require('chauffeur'),
      desc = 'Start a dev server that handles test runner url and proxies requests';

  grunt.registerMultiTask('chauffeur', desc, function() {
    var done = this.async();

    chauffeur(this.data, function() {
      grunt.log.write("Dev server running on port " + this.data.port + "\n");
      done();
    }.bind(this));
  });
};
