const http = require('http');
const fs = require('fs');
path = require('path')
handlebars = require('handlebars')
require('dotenv').config();

const articles = [
    {
        url: 'http://example.com',
        title: 'heute gibt es Wurst'
    },
    {
        url: 'http://example2.com',
        title: 'Morgen gibt es Pommes'
    },
    {
        url: 'http://example3.com',
        title: 'Dann gibt es Frikadelle'
    }

];


const port = process.env.port;

const servePage = (res, pageName, data) => {
    // res.writeHead(200);
    // let stream = fs.createReadStream('views/'  + pageName);
    // stream.pipe(res);
    fs.readFile('views/' + pageName, 'utf-8', (err, html) => {
        if(err) {
            console.log(err);
            res.writeHead(500);
            res.end()
        } else {
            res.writeHead(200);
            const templateFunction = handlebars.compile(html);
            res.end(templateFunction(data || {}));
        }
    });
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
            servePage (res, 'settings.html')
            break
        default:
            servePage (res, 'settings.html')
            break
    }
});

server.listen(port, () => {
    console.log('Server listening on port: ' + port);
});