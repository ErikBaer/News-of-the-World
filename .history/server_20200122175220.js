require('dotenv').config();

const 
    express = require('express'),
    expressHandlebars = require('express-handlebars'),
    port = process.env.port;

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

const server = express();

const renderHome = (req, res) => {
    res.render('home', {
        title: 'News',
        heading: 'Welcome to your new News Dashboard',
        articles: articles,
        homeActive: true
    })
};

const renderSettings = (req, res) => {
    res.render('settings', {
        title: 'Settings',
        heading: 'Welcome to your new Settings',
        settingsActive: true
    })
};

server.get('/home', renderHome)

server.get('/settings', renderSettings)

server.set('viewDir', 'views');

server.engine('html', expressHandlebars({
    extname: 'html',
    partialsDir: 'partials/'
}));

server.set('view engine', 'html');

server.use(express.static('public'));

server.listen(port, () => {
    console.log('Server listening on port: ' + port);
});