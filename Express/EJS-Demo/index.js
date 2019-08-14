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


// Set listener to port 
app.listen(80, function(){
 console.log("Listening on localhost");
});