
var express = require('express');
var router = express.Router();
var db = require('../models/db');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

// Create user
router.post('/register', function(req, res){

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    var data = {
        email : req.body.email,
        password: hash,
        role: req.body.role
    };

    var model = new db();

    model.createUser(data, function(err, response){

        if (err) {
            return res.json({"error" : true, "message" : err})
        }

        return res.json({"error": false, "message": 'New user created.'});
    });
});

router.post('/login', function(req, res) {
    var model = new db();

    // Req.body.email gives error
    model.findUser(req.body.email, function (err, response) {
        if (err) {
            res.json({"error": true, "message": err})
        }
        if (!response) {
            return res.json({"error": true, "message": 'User not found.'});
        }
        if (bcrypt.compareSync(req.body.password, response.password) === false) {
            return res.json({"error" : true, "message": 'Invalid password.'})
        }

        var token = jwt.sign(response, global.config.secret, {
            expiresIn : 1440
        });

        res.json({
            error: false,
            message: 'Validation successful!',
            role: response.role,
            token: token
        });
    });
});



router.post('/sender', function(req, res) {
    var model = new db();

    model.sendPackage(req.body.name, req.body.street, req.body.message, function (err, response) {
        if (err) {
            res.json({"error": true, "message": err});
        }
        if (!response) {
            return res.json({"error": true, "message": 'Package not imported!'});
        }

        res.json({
            error: false,
            message: 'Package imported!'
        });
    }
    );
});

router.get('/courier', function(req, res) {
    var model = new db();

    model.getPackages(function (err, response) {
        if (err) {
            return res.json({"error": true, "message": 'Greska'});
        }

        if(!response) {
            return res.json({"error": true, "message": 'No packages'});
        }

        return res.json({
            error: false,
            packages: response
        })
    })

});
module.exports = router;