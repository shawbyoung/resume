var express = require('express');
var app = express();
var request = require('request');
var path = require("path");

app.set('port', process.env.PORT || 8080);
app.set('view engine', 'hbs');

app.get('/', function(req, res){
  res.send("Homepage!");
});

var listener = app.listen(process.env.PORT || 8080, process.env.HOST || "0.0.0.0", function() {
    console.log("Express server started");    
});
//goat