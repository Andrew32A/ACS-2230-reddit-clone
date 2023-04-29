// Dependencies, models, etc
require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const checkAuth = require("./middleware/checkAuth");
const cookieParser = require('cookie-parser');

// Set express
const app = express();
app.use(express.static("public"));

// Set db
const db = require('./data/reddit-db');

// Middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set("views", "./views")
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(checkAuth)

// Controllers
require('./controllers/posts')(app);
require('./controllers/comments')(app);
require('./controllers/auth.js')(app);

// Port
app.listen(3000);

// Export app (for tests)
module.exports = app;
