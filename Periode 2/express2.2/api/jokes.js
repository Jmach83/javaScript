var express = require('express');
var router = express.Router();
var jokes = require('../jokes');

router.get('/', function(req, res, next){
    let json = JSON.stringify(jokes.allJokes);
    res.send(json);
})

module.exports = router;