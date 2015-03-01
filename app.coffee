express = require 'express'
app = express()

app.get '/', (req,res) ->
  res.send('hello with Jenkins')

app.listen process.env.PORT || 5000

module.exports = app