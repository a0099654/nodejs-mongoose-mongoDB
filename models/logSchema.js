var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var logSchema = new Schema({
    log: {},
    created_at: {
        type: Date,
        default: Date.now
    }
});

logSchema.methods.displayAll = function displayAll(cb) {
    Log.find({}, function(err, users) {
        if (err) throw err;
        console.log(users);
    });
}

var Log = mongoose.model('Log', logSchema);

module.exports = Log;
