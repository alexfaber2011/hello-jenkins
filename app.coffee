express = require 'express'
app = express()

app.get '/', (req,res) ->
  #Test
  res.send('hello with Jenkins - live')

app.listen process.env.PORT || 5000

module.exports = app