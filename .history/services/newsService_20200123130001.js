settingsService = require('../services/settingsService.js'),
newsapi = require('newsapi-wrapper');


const getNews = () => {
        settingsService.readSettings()
        .then(settings => {
            newsapi // Access newsapi by async promise
            .setApiKey(settings['news-api-key'] || process.env.NEWS_API_KEY || '')
            .setCategory(settings['news-api-category'] || 'business')
            .send()
        });
}

module.exports = {
    getNews
};