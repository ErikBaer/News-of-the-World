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
    partialsDir: 'partials/'
}));

server.set('view engine', 'html');

server.use(express.static('public'));

server.listen(port, () => {
    console.log('Server listening on port: ' + port);
});