"use strict";

var rethinkdb = require('rethinkdb');
var async = require('async');

class db {

    // Database connection
    dbConnect(callback) {
        rethinkdb.connect({
           host: global.config.dbHost,
            port: global.config.dbPort,
            db: 'delivery_service'
        }, function (err, conn) {
            callback(err, conn);
        });
    }

    // Create new user
    createUser(userData, callback) {
        var self = this;

        async.waterfall([
            function (callback) {
                self.dbConnect(function (err, connection) {
                   if (err) {
                       return callback(true, 'Error connecting to database');
                   }
                   callback(null, connection);
                });
            },
            function(connection, callback) {
                rethinkdb.table('users').insert(userData).run(connection, function(err, result) {
                   connection.close();
                   if (err) {
                       return callback(true, "Error while adding new user.");
                   }
                   callback(null, result);
                });
            }
        ], function (err, data) {
            callback(err === null ? false : true, data);
        });
    }

    findUser(email, callback) {
        var self = this;

        async.waterfall([
            function (callback) {
                self.dbConnect(function (err, connection) {
                    if (err) {
                        return callback(true, 'Error connecting to database');
                    }
                    callback(null, connection);
                });
            },
            function (connection, callback) {
                rethinkdb.table('users').filter({"email" : email}).run(connection, function(err, cursor) {
                   connection.close();
                   if (err) {
                       return callback(true, 'Error while fetching user from database.');
                   }
                   cursor.toArray(function (err, result) {
                       if (err) {
                           return callback(true, 'Error reading cursor');
                       }

                       callback(null, result[0])
                   })
                });
            }
        ], function(err, data) {
            callback(err === null ? false : true, data);
        });
    }
// NOT USER FROM HERE
    sendPackage(name, street, msg, callback) {
        var self = this;

        async.waterfall([
            function (callback) {
                self.dbConnect(function (err, connection) {
                    if (err) {
                        return callback(true, 'Error connecting to database');
                    }
                    callback(null, connection);
                });
            },
            function (connection, callback) {
                rethinkdb.table('packages').insert([
                    {
                        "name": name,
                        "street": street,
                        "msg": msg
                    }
                ]).run(connection, function(err, cursor) {
                    connection.close();
                    if (err) {
                        return callback(true, 'Error while fetching user from database.');
                    }
                        if (err) {
                            return callback(true, 'Error reading cursor');
                        }

                        callback(null, cursor);
                });
            },

        ], function(err, data) {
            callback(err === null ? false : true, data);
        });
    }

    getPackages(callback) {
        var self = this;

        async.waterfall([
            function (callback) {
                self.dbConnect(function (err, connection) {
                    if (err) {
                        return callback(true, 'Error connecting to database');
                    }
                    callback(null, connection);
                });
            },
            function (connection, callback) {
                rethinkdb.table('packages').get().run(connection, function(err, cursor) {
                    connection.close();
                    if (err) {
                        return callback(true, 'Error while fetching user from database.');
                    }
                    cursor.toArray(function (err, result) {
                        if (err) {
                            return callback(true, 'Error reading cursor');
                        }

                        callback(null, result);
                    })
                });
            },

        ], function(err, data) {
            callback(err === null ? false : true, data);
        });
    }


}

module.exports = db;