const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();

// Controllers
const posts = require('./controllers/posts')(app);

// Set db
const db = require('./data/reddit-db');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Home
app.get('/', (req, res) => {
  res.render('home');
});

// Create
const Post = require('./models/post');

app.post('/posts/new', (req, res) => {
  const post = new Post(req.body);

  post.save()
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
});

// Show
app.get('/cases/:id', (req, res) => {
  const id = req.params.id;
  const caseData = fetchCaseData(id);

  res.render('cases-show', { case: caseData });
});

// Edit
app.get('/cases/:id/edit', (req, res) => {
  // Find the case
  // Render edit form
});

// Update
app.put('/cases/:id', (req, res) => {
  // Update the case
  // Redirect show
});

// Destroy
app.delete('/cases/:id', (req, res) => {
  // Delete the case
  // Redirect to index
});

// Port
app.listen(3000);
