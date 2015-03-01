request = require 'supertest'
app = require '../app.js'


describe 'GET /', ->
  it 'respond with hello from jenkins', (done) ->
    request(app).get('/').expect('hello with Jenkins - live', done)