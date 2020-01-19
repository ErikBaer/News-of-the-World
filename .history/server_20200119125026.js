const http = require('http');



require('dotenv').config();


const port = process.env.port;

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