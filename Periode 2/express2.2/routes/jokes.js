var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  res.render('jokes', {title: 'jokes', random: _getRandomJoke()});

});

var jokes = [
  "A day without sunshine is like, night.",
  "At what age is it appropriate to tell my dog that he's adopted?",
  "I intend to live forever, or die trying"
];

  function jokes(){
    return jokes;
}

function _getRandomJoke(){
    let index = Math.floor((Math.random()*3));
    return jokes[index]
}

function _addJoke(addJoke){
    jokes.push(addJoke)
}

module.exports = router;
/*module.exports = {
  allJokes : jokes,
  getRandomJoke : _getRandomJoke,
  addJoke : _addJoke
}*/