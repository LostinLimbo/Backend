var express = require("express");
var app = express();

app.get("/", function(req, res){
 res.send("Hi there, Welcome to my assignment!!");
});
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

app.get("/repeat/:word/:num", function(req, res){
 var word = req.params.word + " ";
 var num = req.params.num;
 var result = word.repeat(num) + " ";
  res.send(result);
 });

app.get("*", function(req, res){
 res.send(" Sorry, page not found.....What ARE you doing?")
});




app.listen(80, function(){
 console.log("Listening on localhost!");
});