module.exports = function(grunt) {
  var express = require('express'),
      attach = require('../lib/attach'),
      desc = 'Start a dev server that handles test runner url and proxies requests';

  grunt.registerMultiTask('chauffeur', desc, function() {
    var port = this.data.port || 8000,
        host = this.data.host || 'localhost',
        routes = this.data.routes || false,
        proxy = this.data.proxy || false,
        testable = this.data.testable || false,
        staticFiles = this.data.staticFiles || false,
        done = this.async(),
        app = express();

    if (testable) { attach.testable(app, testable); }
    if (staticFiles) { attach.staticFiles(app, staticFiles); }
    if (routes) { attach.routes(app, routes); }
    if (proxy) { attach.proxy(app, proxy); }

    app.listen(port, host, function() {
      grunt.log.write("Dev server running on port " + port + "\n");
      done();
    });
  });
};
