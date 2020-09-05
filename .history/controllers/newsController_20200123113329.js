const newsapi = require('newsapi-wrapper')

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

 module.exports = {
     renderHome
 }    