require('dotenv').config();

const 
    express = require('express'),
    expressHandlebars = require('express-handlebars'),
    bodyParser = require('body-parser'),
    routing = require('./routes')
    port = process.env.port; // Get port from .env (Environment Variables)

const server = express(); // Initialize server

server.engine('html', expressHandlebars({
     extname: 'html',
    partialsDir: 'partials/'
})); // Define Template engine

server.set('view engine', 'html'); // Set Template engine

server.use(bodyParser.urlencoded({
    extended: false
})) // middleware encoding the body of the request to request.body for easy access

server.use(express.static('public')); // Serve style.css directly from public

server.use('/', routing);

server.set('viewDir', 'views'); // Set directory for Templates

server.listen(port, () => {
    console.log('Server listening on port: ' + port);
}); // Activate server on defined port



