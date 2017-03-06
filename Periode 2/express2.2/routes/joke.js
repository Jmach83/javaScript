var express = require('express');
var router = express.Router();
var jokes = require('../jokes');

router.get('/', function(req, res, next) {

  res.render('joke', {title: 'Random joke', random: jokes.getRandomJoke});

});

router.get('/jokes', function(req, res, next){
  res.render('jokes', {title: 'All jokes', jokes: jokes.allJokes});
})

router.get('/addjoke', function(req, res, next){
  res.render('addjoke', {title:  'Add Joke', addjoke: jokes.addJoke(req.body.addJoke)})
})



module.exports = router;
