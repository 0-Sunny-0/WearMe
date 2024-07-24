const path = require('path');
const express = require('express');
const { create } = require('express-handlebars');;
const routes = require('./routes');
const sequelize = require('./config/connection');
require('dotenv').config(); // Load environment variables from .env file

const app = express(); // Initialize express app
const PORT = process.env.PORT || 3001; // Set the port to the environment variable or default to 3001
const hbs = create({ extname: '.hbs' }) // Create an instance of Handlebars with the .hbs extension
app.engine('handlebars', hbs.engine); // Set the handlebars engine
app.set('view engine', 'handlebars'); // Set the view engine to Handlebars
app.set('views', path.join(__dirname, 'routes', 'views')); // Set the views directory
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(routes); // Use the routes defined in routes folder
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory

// Test the database connection, sync models, and then start the server
sequelize.authenticate().then(() => {
  console.log('Database connection has been established successfully.');
  return sequelize.sync({ force: false }); // Sync models
}).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}.`); // Start the server and listen on the specified port
  });
}).catch((err) => {
  console.error('Unable to connect to the database or sync models:', err); 
});