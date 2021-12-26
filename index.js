var express = require('express');
var app = express();
var router = require('./smallrouters.js');
var db=require('./models/db')
var user1=require('./allmodels/user')




// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page

//both index.js and things.js should be in same directory
app.use('/things', router);


app.listen(8080);
console.log('Server is listening on port 8080');


