var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2", { useNewUrlParser: true, useUnifiedTopology: true });

var Post = require("./models/post");
var User = require("./models/user");


// Find user
// Find all posts for that user

// User.findOne({email: "bill@feet.com"}).populate("posts").exec((err, user) =>{
//   if(err){
//     console.log(err);
//   } else{
//     console.log(user);
//   }
// });

Post.create({
  title: "Things to look at",
  content: "Peacocks, Yourself, A Mirror"
}, (err, post) =>{
  User.findOne({email: "bill@feet.com"}, (err, foundUser) =>{
    if(err){
      console.log(err);
    } else{
      foundUser.posts.push(post);
      foundUser.save((err, data) =>{
        if(err){
          console.log(err)
        } else{
          console.log(data);
        }
      });
    }
  });
});

// User.create({
//   email: "bill@feet.com",
//   name: "Bill Feet"
// });