// insert express into app 
var express = require("express");
var app = express();

// make sure express is serving the public directory(stores the css files)
app.use(express.static("public"));

// Sets express to expect ejs files to be used so we can leave the file extension off!
app.set("view engine", "ejs");

// Route to index page!
app.get("/", function(req, res){
 // To send back an actual page instead of a boring one-liner (EJS = Embedded Javascript)
 res.render("home");
});

// Route to love page 
app.get("/fallinlovewith/:thing", function(req, res){
 var thing = req.params.thing;
 res.render("love", {thingVar: thing});
});

// Route to posts page
app.get("/posts", function(req, res){
 var posts = [
  {title: "STARDUST!!!", author: "Ben"},
  {title: "My Awesome Ziggy", author: "Kitty"},
  {title: "HA! It's all about Teepee", author: "Sue"},
 ];
 res.render("posts", {posts: posts})
})

// Set listener to port 
app.listen(80, function(){
 console.log("Listening on localhost");
});