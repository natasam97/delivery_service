
var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // If token is present
    if (token) {

        jwt.verify(token, global.config.secret, function (err, decoded) {
            if (err) {
                return res.json({"error": true, "message": 'Token authentication failed.'});
            }

            req.decoded = decoded;
            next();
        });
    } else {
        // If token is empty return error
        return {
            "error": true,
            "message": 'No token provided'
        };
    }
};