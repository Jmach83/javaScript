const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');//connect to db 
mongoose.connection
.once('open', () => console.log('Good to go!'))//promise fortæller hvad der sker
.on('error', (error) => {                      //ved connection til mongodb
    console.warn('Warning', error);
});