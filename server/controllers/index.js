
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.json({ message: 'Hello'});
});

router.use('/api', require('./user'));

module.exports = router;