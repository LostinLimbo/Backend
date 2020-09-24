var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", { useNewUrlParser: true, useUnifiedTopology: true });

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
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "ben.mort@me.com",
//     name: "Ben Mortimer"
// });


// newUser.posts.push({
//     title: "How to play",
//     content: "Just do it"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     }   else{
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are Delicious"
// });

// newPost.save((err, post) =>{
//     if(err){
//         console.log(err);
//     }   else{
//         console.log(post);
//     }
// });

User.findOne({name: "Ben Mortimer"}, (err, user) =>{
    if(err){
        // console.log(err);
    }   else{
        user.posts.push({
            title: "Things I HATE!",
            content: "Wet feet"
        });
        user.save((err, user) =>{
            if(err){
                console.log(err);
            }   else{
                console.log(user);
            }
        });
    }
});