//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
//use mysql database
const mysql = require('mysql');
const app = express();
var route=require('./route');
var cors = require('cors');

//set views file
app.set('views',path.join(__dirname,'views'));
app.use(cors({ Origin: '*' }));
//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//set folder public as static folder for static file
app.use('/assets',express.static(__dirname + '/public'));
app.use(route);

//server listening
app.listen(8000, () => {
  console.log('Server is running at port 8000');
});
