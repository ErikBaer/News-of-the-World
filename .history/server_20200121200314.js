require('dotenv').config();

const 
    http = require('http'),
    fs = require('fs'),
    path = require('path'),
    handlebars = require('handlebars'),
    express = require('express'),
    expressHandlebars = require('express-handlebars'),
    port = process.env.port;



const server = express();

server.get('/home', (req, res) => {
    res.render('home', {
        title: 'News',
        heading: 'Welcome to your new News Dashboard',
        articles: articles,
        homeActive: true
    })
})

server.get('/settings', (req, res) => {
    res.render('settings', {
        title: 'Settings',
        heading: 'Welcome to your new Settings',
        settingsActive: true
    })
})

server.set('viewDir', 'views');

server.engine('html', expressHandlebars({
    extname: 'html',
    partialsDir: '/partials'
}));

server.set('view engine', 'html');

//server.use(express.static('public'));

const articles = [
    {
        url: 'http://example.com',
        title1: 'heute gibt es Wurst'
    },
    {
        url: 'http://example2.com',
        title1: 'Morgen gibt es Pommes'
    },
    {
        url: 'http://example3.com',
        title1: 'Dann gibt es Frikadelle'
    }

];



const servePage = (res, pageName, data) => {

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


server2 = http.createServer((req, res) => {
    res.writeHead(200);

    if (req.url.startsWith('/public')){
    servePublicFile(res, req.url);
    return
    }
    
    switch (req.url) {
        case '/settings':
            servePage (res, 'settings.html', {
                title: 'Settings',
                heading: 'Welcome to your new Settings',
                settingsActive: true
            })
            break
        default:
            servePage (res, 'home.html', {
                title: 'News',
                heading: 'Welcome to your new News Dashboard',
                articles: articles,
                homeActive: true
            });
            break
    }
});

server.listen(port, () => {
    console.log('Server listening on port: ' + port);
});