const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const posts = require('./controllers/posts')(app);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set db
const db = require('./data/reddit-db');

// middleware
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));

// home
app.get('/', function (req, res) {
    res.render('home');
});

// new
app.post('/posts/new', (req, res) => {
    // INSTANTIATE INSTANCE OF POST MODEL
    const post = new Post(req.body);

    // SAVE INSTANCE OF POST MODEL TO DB AND REDIRECT TO THE ROOT
    post.save()
      .then(() => {
        res.redirect('/')
      })
      .catch(err => console.log(err))
  });

// create
const Post = require('./models/post');

module.exports = (app) => {

  // CREATE
  app.post('/posts/new', (req, res) => {
    // INSTANTIATE INSTANCE OF POST MODEL
    const post = new Post(req.body);

    // SAVE INSTANCE OF POST MODEL TO DB AND REDIRECT TO THE ROOT
    post.save(() => res.redirect('/'));
  });

};

// show
app.get('/cases/:id', (req, res) => {
    const id = req.params.id;
    const caseData = fetchCaseData(id);
  
    res.render('cases-show', { case: caseData });
  });
  
// edit
app.get('/cases/:id/edit', (req, res) => {
  // find the case
  // render edit form
})

// update
app.put('/cases/:id', (req, res) => {
  // update the case
  // redirect show
})

// destroy
app.delete('/cases/:id', (req, res) => {
  // delete the case
  // redirect to index
})

// port
app.listen(3000);
