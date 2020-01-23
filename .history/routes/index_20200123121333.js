const 
    router = require('express').Router(),
    newsController = require('../controllers/newsController.js'),
    settingsController = require('../controllers/settingsController.js');


//home
router.get('/home', newsController.renderHome); // Configure ->get rendered Templates from multiple routes
router.get('/', newsController.renderHome)

//settings
router.get('/settings', settingsController.renderSettings);
router.get('/admin', settingsController.renderSettings);
router.post('/settings', .settingsController.receiveSettings);

module.exports = router;