var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2", { useNewUrlParser: true, useUnifiedTopology: true });

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
      }
    ]
});
var User = mongoose.model("User", userSchema);

// Find user
// Find all posts for that user

User.findOne({email: "bill@feet.com"}).populate("posts").exec((err, user) =>{
  if(err){
    console.log(err);
  } else{
    console.log(user);
  }
});

// Post.create({
//   title: "How to properly burn decent burgers",
//   content: "Cook, Cook, Cook Cook, Cook, Cook, Cook, Cook"
// }, (err, post) =>{
//   User.findOne({email: "bill@feet.com"}, (err, foundUser) =>{
//     if(err){
//       console.log(err);
//     } else{
//       foundUser.posts.push(post);
//       foundUser.save((err, data) =>{
//         if(err){
//           console.log(err)
//         } else{
//           console.log(data);
//         }
//       });
//     }
//   });
// });

// User.create({
//   email: "bill@feet.com",
//   name: "Bill Feet"
// });