var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var logSchema = new Schema({
    log: {},
    created_at: {
        type: Date,
        default: Date.now
    }
});

logSchema.methods.displayAll = function displayAll(project_name, cb) {
    return project_name ? this.model('Log').find({project_name}, cb) : this.model('Log').find({}, cb);
}

var Log = mongoose.model('Log', logSchema);

module.exports = Log;
