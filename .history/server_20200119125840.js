const http = require('http');
const fs = require('fs');
require('dotenv').config();

const port = process.env.port;

const servePage(res, pageName) => {
    let stream = fs.createReadStrream
}

server = http.createServer((req, res) => {
    res.writeHead(200);
    switch (req.url) {
        case '/admin':
            res.end('Admin page');
            break
        default:
            res.end('HomePage')
            break
    }
});

server.listen(port, () => {
    console.log('Server listening on port: ' + port);
});