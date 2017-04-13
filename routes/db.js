var express = require('express');
var mongoose = require('mongoose');
var Log = require('../models/logSchema');

var router = express.Router();
mongoose.Promise = global.Promise;

/* GET users listing. */
router.get('/', function(req, res, next) {

    var logData = new Log({});
    logData.displayAll((err, logs) => {
        res.json(logs)
    })
    // console.log("===response====");
    // console.log(resp);
    // res.send(resp);2
});

router.post('/', function(req, res) {

    var logData = new Log({
        log: req.body
    });

    logData.save(function(err) {
        if (err) throw err;
    })

    res.send('POST request to the homepage')
})

module.exports = router;
