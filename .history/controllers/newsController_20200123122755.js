const 
    newsService = require('../services/newsService.js');


const renderHome = (req, res) => {
    newsService.getNews()
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