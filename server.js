var mongoose = require('mongoose');
var config = require('./config');

var options = {
    user: config.mongo_user,
    pass: config.mongo_pwd
};

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, options);

mongoose.connection.on('connected', function() {
    console.log('Mongoose default connection open to ' + config.uri);
});

// If the connection throws an error
mongoose.connection.on('error', function(err) {
    console.log('Mongoose default connection error: ' + err);
});
