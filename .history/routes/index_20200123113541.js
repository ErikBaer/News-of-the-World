const 
    router = require('express').Router(),

    newsapi = require('newsapi-wrapper'),
    fs = require('fs'),
    newsController = require('../controllers/newsController.js');


const readSettings = () => {
    try{
        return JSON.parse(fs.readFileSync('settings.json')) //look for json with settings, parse result string back to json
        } catch (e) {
            return {
            }
        } 
    } // catch error if there is no json

function receiveSettings (req, res) {   
    fs.writeFileSync('settings.json', JSON.stringify(req.body));
    renderSettings(req, res); // accepts the request.body, creates a JSON and saves it 
       
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
router.get('/home', newsController.renderHome); // Configure ->get rendered Templates from multiple routes
router.get('/', newsController.renderHome)

//settings
router.get('/settings', renderSettings);
router.get('/admin', renderSettings);
router.post('/settings', receiveSettings);

module.exports = router;