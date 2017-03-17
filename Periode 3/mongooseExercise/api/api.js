let router = require("express").Router();
let jokeModel = require('../models/Jokes');

router.get("/",(req,res) =>{
  res.json({msg: "Hello World"});
});

router.get('/jokes', function(req, res){
    jokeModel.find(function(err, jokes){
      if(err){
        res.send(err);
      }
      res.json(jokes);
    })
});

router.get('/jokes/:id', function(req, res){
    jokeModel.findById(req.params.id, function(err, joke){
      if(err){
        res.send(err);
      }
      res.json(joke);
    })
});

router.post('/jokes', function(req, res){
  let joke = new jokeModel;

  joke.joke = req.body.joke;
  joke.category = req.body.category;
  joke.reference = req.body.reference;

  joke.save(function (err){
    if(err){
      res.send(err);
    }
    res.json(joke);
  })
});

router.put('/jokes/:id', function(req, res){
  jokeModel.findByIdAndUpdate(req.params.id, 
  {
    joke: req.params.joke,
    category: req.params.category,
    reference: req.body.reference
  }, function(err, joke){

    if(err){
      res.send(err);
    }
    res.json(joke)
  })
})

router.delete('/jokes/:id', function(req, res){
  jokeModel.findByIdAndRemove(req.params.id, function(err, joke){
    if(err){
      res.send(err);
    }
    res.statusCode();
  })
})





module.exports = router;
