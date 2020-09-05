require('dotenv').config();

const 
    express = require('express'),
    expressHandlebars = require('express-handlebars'),
    newsapi = require('newsapi-wrapper'),
    bodyParser = require('body-parser')
    port = process.env.port; // Get port from .env (Environment Variables)

const server = express(); // Initialize server

server.engine('html', expressHandlebars({
     extname: 'html',
    partialsDir: 'partials/'
})); // Define Template engine

server.set('view engine', 'html'); // Set Template engine

server.use(bodyParser.urlencoded())
server.use(express.static('public')); // Serve style.css directly from public

const renderHome = (req, res) => {
    let articles = [],
        message = '';
    newsapi // Access newsapi by async promise
        .setApiKey(process.env.NEWS_API_KEY)
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

const mapNewsCategories= categoryName => {
    return {
        value: categoryName,
        label: categoryName,
        selected:false
    }
} // Create an Array of Objects from the Array of Categories

const renderSettings = (req, res) => {
    res.render('settings', {
        title: 'Settings',
        heading: 'Welcome to your new Settings',
        settingsActive: true,
        newsApiCategories: newsapi.getCategories().map(mapNewsCategories)
    })
}; // Render Templates when called

const receiveSettings = (req, res) => {
  //  console.log(req.body);
 //  req.pipe(res);
}

server.get('/home', renderHome); // Configure ->get rendered Templates from multiple routes
server.get('/', renderHome)

server.get('/settings', renderSettings);
server.get('/admin', renderSettings);
server.post('/settings', console.log('whazzup'))

server.set('viewDir', 'views'); // Set directory for Templates

server.listen(port, () => {
    console.log('Server listening on port: ' + port);
}); // Activate server on defined port