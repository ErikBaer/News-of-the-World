const 
    http = require('http'),
    fs = require('fs'),
    path = require('path'),
    handlebars = require('handlebars'),
    port = process.env.port;


    require('dotenv').config();


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

const registerPartials = () => {

    partials = fs.readdirSync('partials/')
    partials.forEach(partial => {
    name = partial.split('.')[0];
    html = fs.readFileSync('partials/' + partial, 'utf-8');
    handlebars.registerPartial(name, html);  
});
}

registerPartials()

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


server = http.createServer((req, res) => {
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