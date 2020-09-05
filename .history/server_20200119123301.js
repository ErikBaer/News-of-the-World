const http = require('http');
require('dotenv').config();
const port = process.env.port;

server = http.createServer((req, res) => {
    console.log("Requesting: " + req.url);
    res.writeHead(200);
    res.end('Node.js talking...Really though!')
});

server.listen(port, () => {
    console.log('Server listening on port: ' + port);
});