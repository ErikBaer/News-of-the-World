const 
    newsapi = require('newsapi-wrapper'),
    fs = require('fs'),
    settingsService = require('../services/settingsService.js');
    newsService = require('../services/newsService.js')


const renderHome = (req, res) => {
    let articles = [],
        message = '';
        settings = settingsService.readSettings();
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

 module.exports = {
     renderHome
 }    