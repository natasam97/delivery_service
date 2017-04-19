// Main entry point to server application

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

global.config = require('./config');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

// No Auth
app.use(require('./controllers'));

// Token auth
app.use(require('./middlewares/TokenValidator'));

// Apis for protecting and using token
// app.use(require('./controllers/account'));

app.listen(config.port, function(){
    console.log("Server is listening on port: " + config.port);
});