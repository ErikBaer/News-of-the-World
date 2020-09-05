const router = require('express').Router();

//home
server.get('/home', renderHome); // Configure ->get rendered Templates from multiple routes
server.get('/', renderHome)

//settings
server.get('/settings', renderSettings);
server.get('/admin', renderSettings);
server.post('/settings', receiveSettings);

modules.export = router;