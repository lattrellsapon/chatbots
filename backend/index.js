'use strict';
var express  = require('express'),
bodyParser   = require('body-parser'),
http         = require('http'),
config       = require('./config'),
server       = express(),
mongoose     = require('mongoose'),
PaperInfo     = require('./API/Models/PaperInfo');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
var routes = require('./API/Routes/Routes'); //importing route
routes(server); //register the route
server.listen((process.env.PORT || 8000), function () {
    console.log("Server is up and listening on port" + process.env.PORT);
})


// Connect to database

const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://devtest:test@ds117540.mlab.com:17540/autpaperdata";

MongoClient.connect(url, (err, client) => {

  if(err) throw err;
  
  const db = client.db('autpaperdata');

  db.collection('PaperInfo').find({}).toArray( (err, res) => {

      if(err) throw err;
      console.log(res);
      client.close();

  })

})
