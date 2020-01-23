const 
    router = require('express').Router(),

    newsapi = require('newsapi-wrapper'),
    fs = require('fs'),
    newsController = require('../controllers/newsController.js'),
    settingsController = require('../controller/settingsController.js');




//home
router.get('/home', newsController.renderHome); // Configure ->get rendered Templates from multiple routes
router.get('/', newsController.renderHome)

//settings
router.get('/settings', renderSettings);
router.get('/admin', renderSettings);
router.post('/settings', receiveSettings);

module.exports = router;