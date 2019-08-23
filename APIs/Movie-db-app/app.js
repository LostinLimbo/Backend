var express = require("express");
// var ejs = require("ejs");
var request = require("request");
var app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
 res.render("home");
});


app.get("/results", function(req, res){
 var searchItem = req.query.search;
 var url = "https://omdbapi.com/?apikey=thewdb&s="
 request( url + searchItem, function(error, response, body){
  if(!error && response.statusCode == 200){
   var data = JSON.parse(body);
   res.render("results", {data: data});
  }
 });
});









app.listen(80, function(){
 console.log("Listening on localhost");
});


