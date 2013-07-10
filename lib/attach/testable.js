module.exports = function (app, conf) {
  var route = conf.route || '/test.html';

  app.get(route, function(req, res) {
    res.setHeader('text/plain');
    res.end('Test.html was reached');
  });
};
