
let express = require('express');
let favicon = require('serve-favicon');
let path = require('path');
let logger = require('morgan');

let app = express();
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(logger('dev'));

app.get('/', function(req, res){
  res.send('hello world');
});
app.use(function (req, res, next){
  let err = new Error('Not Found');
  err.status = 404;
  
  next(err);
})  


module.exports = app;


//Læas om morgan - log til fil
//nået til 9 - error handler