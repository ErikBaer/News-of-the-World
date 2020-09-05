const http = require('http');
const fs = require('fs');
path = require('path')
require('dotenv').config();


const port = process.env.port;

const servePage = (res, pageName) => {
    res.writeHead(200);
    let stream = fs.createReadStream('views/'  + pageName);
    stream.pipe(res);
};

const servePublicFile = (res, url) => {
    res.writeHead(200);
    let stream = fs.createReadStream(path.join(__dirname, url))
    stream.pipe(res);
}


server = http.createServer((req, res) => {
    res.writeHead(200);

    if (req.url.startsWith('/public')){
    servePublicFile(res, req.url);
    return
    }
    
    switch (req.url) {
        case '/home':
            servePage(res, 'home.html');
            break
        default:
            servePage (res, 'settings.html')
            break
    }
});

server.listen(port, () => {
    console.log('Server listening on port: ' + port);
});