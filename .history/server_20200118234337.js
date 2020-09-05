const http = require('http');
require('dotenv').config();
const port = process.nextTick.listening_port;

server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Node.js talking...')
});

server.listen(port, () => {
    console.log('Server listening on port: ' + port);
});