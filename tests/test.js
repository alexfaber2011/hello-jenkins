// Generated by CoffeeScript 1.8.0
(function() {
  var app, request;

  request = require('supertest');

  app = require('../app.js');

  describe('GET /', function() {
    return it('respond with hello from jenkins', function(done) {
      return request(app).get('/').expect('hello with Jenkins', done);
    });
  });

}).call(this);

//# sourceMappingURL=test.js.map
