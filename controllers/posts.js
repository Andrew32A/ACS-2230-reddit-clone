const Post = require("../models/post");

module.exports = (app) => {
  // INDEX
  app.get("/", (req, res) => {
    Post.find({})
      .lean()
      .then((posts) => res.render("posts-index", { posts }))
      .catch((err) => {
        console.log(err.message);
      });
  });

  // CREATE
  app.get("/posts/new", (req, res) => {
    res.render("posts-new");
  });

  app.post("/posts/new", (req, res) => {
    console.log(req.body);
    const post = new Post(req.body);

    post
      .save()
      .then(() => res.redirect("/"))
      .catch((err) => console.log(err));
  });

  // SHOW
  app.get("/posts/:id", (req, res) => {
    // LOOK UP THE POST
    Post.findById(req.params.id)
      .lean()
      .populate("comments")
      .then((post) => res.render("posts-show", { post }))
      .catch((err) => {
        console.log(err.message);
      });
  });

  // SUBREDDIT
  app.get("/n/:subreddit", (req, res) => {
    console.log(req.params.subreddit);
  });
};
