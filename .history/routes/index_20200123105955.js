const router = require('express').Router();

server.get('/settings', renderSettings);
server.get('/admin', renderSettings);
server.post('/settings', receiveSettings);

modules.export = router;