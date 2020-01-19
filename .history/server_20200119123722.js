const http = require('http');
require('dotenv').config();
const port = process.env.port;

server = http.createServer((req, res) => {
    res.writeHead(200);
    switch 
});

server.listen(port, () => {
    console.log('Server listening on port: ' + port);
});