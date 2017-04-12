var express = require('express');
var mongoose = require('mongoose');
var Log = require('../models/logSchema');

var router = express.Router();
mongoose.Promise = global.Promise;
// var logData = new Log({
//     tweet: JSON.stringify(tweet),
//     tweetID: tweet.id_str
// })
//
// TweetData.save(function(err) {
//     if (err) throw err;
//     console.log("Tweets saved successfully");
// })



/* GET users listing. */
router.get('/', function(req, res, next) {
    // var resp = logData.displayAll();
    // var logData = new Log({
    //     log: {}
    // });
    //
    // logData.save(function(err) {
    //     if (err) throw err;
    //     console.log("Tweets saved successfully");
    // })
    res.send("i am here");
    // console.log("===response====");
    // console.log(resp);
    // res.send(resp);2
});

router.post('/', function(req, res) {
    console.log("corresponding");
    console.log(req.body);

    var logData = new Log({
        log: req
    });

    logData.save(function(err) {
        if (err) throw err;
        console.log("getting json");
    })

    res.send('POST request to the homepage')
})

module.exports = router;
