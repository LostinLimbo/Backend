var express = require("express");
var app = express();

// Routing for Root Dir
app.get("/", function(req, res){
 res.send("Hi there, Welcome to my assignment!!");
});
// Routing for a few animal pages 
app.get("/speak/:animal", function(req, res){
 var voice = {
  pig: "Oink!",
  cow: "Moo!",
  dog: "Woof Woof!!",
  cat: "I hate you, now FEED ME!!",
  fish: "...."
 }
 var animal = req.params.animal.toLowerCase();
 var noise = voice[animal];
 res.send("The " + animal + " says " + noise + "!");
 noise = ""
});

// Routing for a repeat page
app.get("/repeat/:word/:num", function(req, res){
 var word = req.params.word + " ";
 var num = req.params.num;
 var result = word.repeat(num) + " ";
  res.send(result);
 });

 // Error Route 
app.get("*", function(req, res){
 res.send(" Sorry, page not found.....What ARE you doing?")
});



// Run server on localhost port 80
app.listen(80, function(){
 console.log("Listening on localhost!");
});