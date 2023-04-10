var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Middleware
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');



app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('home');
});

// CASES RESOURCE

// NEW
app.get('/cases/new', (req, res) => {
  res.render('cases-new', { case: {} });
})

// CREATE
app.post('/cases', (req, res) => {
  console.log("hiya")

  const caseId = "3";
  res.redirect(`/cases/${caseId}`)
});

// INDEX

// SHOW
app.get('/cases/:id', (req, res) => {
    const id = req.params.id;
    const caseData = fetchCaseData(id);
  
    res.render('cases-show', { case: caseData });
  });
  
// EDIT
app.get('/cases/:id/edit', (req, res) => {
  // find the case
  // render edit form
})

// UPDATE
app.put('/cases/:id', (req, res) => {
  // update the case
  // redirect show
})

// DESTROY
app.delete('/cases/:id', (req, res) => {
  // delete the case
  // redirect to index
})

app.listen(3000);
