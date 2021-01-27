const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


//autoload routes, controllers and dbconnection into app
consign()
    .include('api/routes')
    .then('api/controllers')
    .then('config/dbConnection.js')
    .into(app);




module.exports = app;




