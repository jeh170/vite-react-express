const express = require('express')
const { getHello, changeHello } = require('./services/hello')
const server = express()

server.use(express.json())

server.get('/hello', (req, res) => {
  res.send(getHello())
})

server.put('/hello', (req, res) => {
  const newHello = req.body.hello
  changeHello(newHello)
  res.send('Hello Set')
})

module.exports = server
