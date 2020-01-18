const http = require('http');
const port = 3000;

server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Node.js talking...')
});

server.listen(port, () => {
    console.log('Server listening on port: ' + port);
});