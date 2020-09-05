require('dotenv').config();

const 
    express = require('express'),
    expressHandlebars = require('express-handlebars'),
    newsapi = require('newsapi-wrapper'),
    port = process.env.port; // Get port from .env (Environment Variables)
    

// const articles = [
//     {
//         url: 'http://example.com',
//         title1: 'heute gibt es Wurst'
//     },
//     {
//         url: 'http://example2.com',
//         title1: 'Morgen gibt es Pommes'
//     },
//     {
//         url: 'http://example3.com',
//         title1: 'Dann gibt es Frikadelle'
//     }

// ]; // Fake array of articles -dummy-

//console.log(newsapi)

const server = express(); // Initialize server

server.engine('html', expressHandlebars({
     extname: 'html',
    partialsDir: 'partials/'
})); // Define Template engine

server.set('view engine', 'html'); // Set Template engine

server.use(express.static('public')); // Serve style.css directly from public

const renderHome = (req, res) => {
    newsapi
        .setApiKey(process.env.NEWS_API_KEY)
        .send()
        .then(response => {
            res.render('home', {
                title: 'News',
                heading: 'Welcome to your new News Dashboard',
                homeActive: true,
                articles: response.articles
            });
        });
};

const renderSettings = (req, res) => {
    res.render('settings', {
        title: 'Settings',
        heading: 'Welcome to your new Settings',
        settingsActive: true
    })
}; // Render Templates when called

server.get('/home', renderHome); // Configure ->get rendered Templates from multiple routes
server.get('/', renderHome)

server.get('/settings', renderSettings);
server.get('/admin', renderSettings)

server.set('viewDir', 'views'); // Set directory for Templates

server.listen(port, () => {
    console.log('Server listening on port: ' + port);
}); // Activate server on defined port