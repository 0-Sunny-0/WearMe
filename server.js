// Import necessary modules
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');
const routes = require('./controllers');

// Load environment variables from .env file
require('dotenv').config();

// Initialize express app
const app = express();

// Set the port to the environment variable or default to 3001
const PORT = process.env.PORT || 3001;

// Create an instance of Handlebars
const hbs = exphbs.create({});

// Configure session middleware
const sess = {
  secret: process.env.SESSION_SECRET, // Use the session secret from environment variables
  cookie: {}, // Configure cookie settings (empty object for default settings)
  resave: false, // Prevent session from being saved back to the session store if it wasn't modified
  saveUninitialized: true, // Save uninitialized sessions to the store
  store: new SequelizeStore({
    db: sequelize // Use Sequelize to store session data
  })
};

// Use the session middleware
app.use(session(sess));

// Set the Handlebars engine
app.engine('handlebars', hbs.engine);

// Set the view engine to Handlebars
app.set('view engine', 'handlebars');

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Use the routes defined in the routes folder
app.use(routes);

// Example route to render the home page with someArr data
const someArr = [1, 2, 3];
app.get('/', (req, res) => {
  res.render('home', { someArr });
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Test the database connection and then start the server
sequelize.authenticate().then(() => {
  console.log('Database connection has been established successfully.');
  app.listen(PORT, () => {
    // Server is listening on the specified port
    console.log(`Server listening on http://localhost:${PORT}.`);
  });
}).catch((err) => {
  console.log(err);
})