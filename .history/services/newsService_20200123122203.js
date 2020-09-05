settingsService = require('../services/settingsService.js');


const requestPromise = () => {
        settings = settingsService.readSettings();
    newsapi // Access newsapi by async promise
        .setApiKey(settings['news-api-key'] || process.env.NEWS_API_KEY || '')
        .setCategory(settings['news-api-category'] || 'business')
        .send()
}

module.exports = {
    requestPromise
}