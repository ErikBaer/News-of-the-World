const router = require('express').Router();

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

//home
server.get('/home', renderHome); // Configure ->get rendered Templates from multiple routes
server.get('/', renderHome)

//settings
server.get('/settings', renderSettings);
server.get('/admin', renderSettings);
server.post('/settings', receiveSettings);

modules.export = router;