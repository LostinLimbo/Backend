// load express
var express = require("express");
var app = express();
// define friends
var friends = ["Martin", "Pete", "Stu", "Sam", "Alice"];

app.use(express.static("public"));
// load body-pares
bodyParser = require("body-parser");
// using body-pareser in our app
app.use(bodyParser.urlencoded({extended: true}));
// set engine
app.set("view engine", "ejs");
// Root Route
app.get("/", (req, res) => {
 res.render("home");
});
// Route for our friends page
app.get("/friends", function(req, res){
 res.render("friends", {friends: friends});
});
//  Post route for friends page!
app.post("/addfriend", (req, res) => {
 var newFriend = req.body.newfriend;
 // add input text to array
 friends.push(newFriend);
 // redirect page to /friends
 res.redirect("/friends");
});



// port listener
app.listen(80, function(){
 console.log("Listening on localhost");
});