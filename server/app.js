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

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Origin,Content-Type, X-Auth-Token');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});

app.listen(config.port, function(){
    console.log("Server is listening on port: " + config.port);
});