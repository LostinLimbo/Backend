var express = require("express");
var app = express();

//  "/" => "Hi There!"
app.get("/", function(req, res){
 res.send("Hi There!");
});
//  "/bye" => "Goodbye!!"
app.get("/bye", function(req, res){
  res.send("Goodbye!!")
});
//  "/dog" => "Meow!"
app.get("/dog", function(req,res){
  res.send("Meow!!")
});


// To create a universal get request (to stop from having to write a request for every known word etc would be vrey wet code!) You could write it like this, I'm using reddit as an example as it gets a lot of requests and needs a shortcut to process it all.
app.get("/r/:subredditName", function(req, res){
  var subreddit = req.params.subredditName;
  res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT");
});

// Error message for a non-site page!!
app.get("*", function(req,res){
  res.send("You are a star!! but also very lost, PAGE NOT FOUND!!!")
});





// Tell express to listen for requests (start server)
app.listen(80, function(){
  console.log("Listening on localhost!");
});

