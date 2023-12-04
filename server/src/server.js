const express = require('express')
const getMessage = require('./services/getMessage')
const server = express()

server.get('/hello', (req, res) => {
  res.send(getMessage())
})

module.exports = server
