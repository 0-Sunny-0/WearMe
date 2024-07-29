const path = require('path'); // Core module for handling and transforming file paths
const express = require('express'); // Express framework for building web applications
const session = require('express-session'); // Middleware for handling sessions
const exphbs = require('express-handlebars'); // Handlebars view engine for Express
const routes = require('./controllers'); // Importing routes from the controllers directory
const sequelize = require('./config/connection'); // Sequelize instance for database connection
const SequelizeStore = require('connect-session-sequelize')(session.Store); // Sequelize session store

const app = express(); // Initializing the Express application
const PORT = process.env.PORT || 3001; // Setting the port for the server

// Creating an instance of Handlebars
const hbs = exphbs.create({});

// Session configuration object
const sess = {
  secret: process.env.SESSION_SECRET, // Secret for signing the session ID cookie
  cookie: {}, // Cookie options (can be customized)
  resave: false, // Prevents session from being saved back to the session store if it wasn't modified
  saveUninitialized: true, // Forces a session that is "uninitialized" to be saved to the store
  store: new SequelizeStore({
    db: sequelize // Using Sequelize to store session data
  })
};

app.use(session(sess)); // Using the session middleware

// Setting Handlebars as the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(express.static(path.join(__dirname, 'public'))); // Serving static files from the 'public' directory

app.use(routes); // Using the imported routes

// Syncing the Sequelize models and starting the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}.`));
});