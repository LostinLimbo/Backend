var bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    express = require("express"),
    app = express();

// APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app", { useNewUrlParser: true, useUnifiedTopology: true });

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

// RESTFUL ROUTES
app.get("/", (req, res) =>{
  res.redirect("/blogs");
});
// INDEX
app.get("/blogs", (req, res) =>{
  Blog.find({}, function(err, blogs){
    if(err){
      console.log("ERROR");
    } else{
      res.render("index", {blogs: blogs});
    }
  })
});
// NEW
app.get("/blogs/new", (req, res) =>{
  res.render("new");
});
// CREATE
app.post("/blogs/new")

app.listen(process.env.PORT || 80, process.env.IP, function(){
  console.log("SERVER IS RUNNING");
})