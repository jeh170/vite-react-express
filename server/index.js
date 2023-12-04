const server = require('./src/server')

const port = 3001

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})