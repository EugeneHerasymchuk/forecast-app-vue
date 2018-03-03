const http = require('http')
const connect = require('connect')
const serveStatic = require('serve-static')

// Simple server for serving static files
const app = connect().use(serveStatic('dist/'))
http.createServer(app).listen(9000, () => {
  console.log('Listening on port 9000...')
})