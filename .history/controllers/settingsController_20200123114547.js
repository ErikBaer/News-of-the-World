const
    newsapi = require('newsapi-wrapper'),
        fs = require('fs');


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

module.exports = {
    renderSettings,
    receiveSettings
}