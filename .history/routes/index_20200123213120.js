const 
    router = require('express').Router(),
    newsController = require('../controllers/newsController.js'),
    settingsController = require('../controllers/settingsController.js');
    loginController = require('../controllers/loginController.js')


//home
router.get('/home', newsController.renderHome); // Configure ->get rendered Templates from multiple routes
router.get('/', newsController.renderHome)

//settings
router.get('/settings', settingsController.renderSettings);
router.get('/admin', settingsController.renderSettings);
router.post('/settings', settingsController.receiveSettings);

//login
router.get('/login', loginController.renderLogin);
router.post('/login', loginController.submitLogin);


module.exports = router;