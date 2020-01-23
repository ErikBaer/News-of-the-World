require('dotenv').config();

const 
    express = require('express'),
    expressHandlebars = require('express-handlebars'),
    newsapi = require('newsapi-wrapper'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    port = process.env.port; // Get port from .env (Environment Variables)

const server = express(); // Initialize server

server.engine('html', expressHandlebars({
     extname: 'html',
    partialsDir: 'partials/'
})); // Define Template engine

server.set('view engine', 'html'); // Set Template engine

server.use(bodyParser.urlencoded({
    extended: false
})) // middleware encoding the the body of the response to response.body for easy access
server.use(express.static('public')); // Serve style.css directly from public

const readSettings = () => {
   try{
    return JSON.parse(fs.readFileSync('settings.json')) //look for json with settings, parse result string back to json
     } catch (e) {
         return {
         }
     } 
} // catch error if there is no json

const renderHome = (req, res) => {
    let articles = [],
        message = '';
        settings = readSettings();
    newsapi // Access newsapi by async promise
        .setApiKey(settings['news-api-key'] || process.env.NEWS_API_KEY || '')
        .setCategory(settings['news-api-category'] || 'business')
        .send()
        .then(response => {
            articles = response.articles
        })
        .catch(err => {
            message= 'Error retrieving articles from newsapi.org';  
        })
        .then(response => {
            res.render('home', {
                title: 'News',
                heading: 'Welcome to your new News Dashboard',
                homeActive: true,
                articles,
                message
            });
        })
        }




server.get('/home', renderHome); // Configure ->get rendered Templates from multiple routes
server.get('/', renderHome)

server.get('/settings', renderSettings);
server.get('/admin', renderSettings);
server.post('/settings', receiveSettings);

server.set('viewDir', 'views'); // Set directory for Templates

server.listen(port, () => {
    console.log('Server listening on port: ' + port);
}); // Activate server on defined port



