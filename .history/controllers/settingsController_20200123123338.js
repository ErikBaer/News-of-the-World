const
    newsapi = require('newsapi-wrapper'),
    settingsService = require('../services/settingsService.js'),
    newsController = require('../controllers/newsController.js');


function receiveSettings (req, res) {   
    settingsService.writeSettings(req.body);
    newsController.renderHome(req, res); // accepts the request.body, creates a JSON and saves it 
        
        }

const renderSettings = (req, res) => {
    const settings = settingsService.readSettings() //import json
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

module.exports = {
    renderSettings,
    receiveSettings
}