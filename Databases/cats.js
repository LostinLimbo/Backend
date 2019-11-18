var mongoose = require("mongoose");
// mongoose.set("useUnifiedTopology: true");
mongoose.connect("mongodb://localhost/cat_app", { useNewUrlParser: true, useUnifiedTopology: true });

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model("Cat", catSchema);


//adding a new cat to database

// var george = new Cat({
//   name: "Stardust",
//   age: 4,
//   temperament: "Cuddly"
// });

// george.save(function(err, cat){
//   if(err){
//     console.log("Something went Wrong")
//   } else {
//     console.log("Cat saved to Database");
//     console.log(cat); 
//   }
// });

Cat.create({
  name: "Ziggy",
  age: 4,
  temperament: "Purry"
}, function(err, cat){
  if(err){
    console.log(err);
  } else {
    console.log(cat);
  }
});

//retrieve all cats from the DB and console.log each one
Cat.find({}, function(err, cats){
  if(err){
    console.log("Oh No, An Error!!");
    console.log(err);
  } else {
    console.log("These are the Cats...");
    console.log(cats);
  }
});