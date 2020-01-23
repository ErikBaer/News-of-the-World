const router = require('express').Router(),
    newsapi = require('newsapi-wrapper'),
    fs = require('fs');

function receiveSettings (req, res) {   
    fs.writeFileSync('settings.json', JSON.stringify(req.body));
    renderSettings(req, res); // accepts the request.body, creates a JSON and saves it 
       
       }

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

const renderSettings = (req, res) => {
    const settings = readSettings() //import json
    res.render('settings', {
        title: 'Settings',
        heading: 'Welcome to your new Settings',
        settingsActive: true,
        newsApiKey: settings['news-api-key'] || '',
        newsApiCategories: newsapi.getCategories().map(categoryName => {
            return {
                value: categoryName,
                label: categoryName,
                selected:categoryName === settings['news-api-category'] //create object from category-names
            }
        })
    })
}; // Render Templates when called

//home
router.get('/home', renderHome); // Configure ->get rendered Templates from multiple routes
router.get('/', renderHome)

//settings
router.get('/settings', renderSettings);
router.get('/admin', renderSettings);
router.post('/settings', receiveSettings);

module.exports = router;