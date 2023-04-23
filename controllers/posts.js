const Post = require('../models/post');

module.exports = (app) => {
  // INDEX
  app.get('/', (req, res) => {
    Post.find({}).lean()
      .then((posts) => res.render('posts-index', { posts }))
      .catch((err) => {
        console.log(err.message);
      })
  })
  
  // LOOK UP THE POST
  app.get('/posts/:id', (req, res) => {
    Post.findById(req.params.id).lean()
      .then((post) => res.render('posts-show', { post }))
      .catch((err) => {
        console.log(err.message);
      });
  });
};
