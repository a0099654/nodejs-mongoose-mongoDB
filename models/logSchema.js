var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var logSchema = new Schema({
    tweet: {},
    created_at: {
        type: Date,
        default: Date.now
    }
});

var log = mongoose.model('Tweet', logSchema);

module.exports = log;
