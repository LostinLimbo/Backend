// insert express into app 
var express = require("express");
var app = express();

// Route to index page!
app.get("/", function(req, res){
 // To send back an actual page instead of a boring one-liner (EJS = Embedded Javascript)
 res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res){
 var thing = req.params.thing;
 res.render("love.ejs", {thingVar: thing});
});

app.get("/posts", function(req, res){
 var posts = [
  {title: "STARDUST", author: "Ben"},
  {title: "My Awesome Ziggy", author: "Kitty"},
  {title: "HA! It's all about Teepee", author: "Sue"},
 ];
 res.render("posts.ejs", {posts: posts})
})

// Set listener to port 
app.listen(80, function(){
 console.log("Listening on localhost");
});