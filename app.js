// Generated by CoffeeScript 1.8.0
(function() {
  var app, express;

  express = require('express');

  app = express();

  app.get('/', function(req, res) {
    return res.send('hello with Jenkins - live');
  });

  app.listen(process.env.PORT || 5000);

  module.exports = app;

}).call(this);

//# sourceMappingURL=app.js.map
