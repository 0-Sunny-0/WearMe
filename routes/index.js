// Importing the Router class from the express module
const router = require('express').Router();

// Importing the API routes from the './api' directory
const apiRoutes = require('./api');

// Importing the home routes from the '../views' directory
const homeRoutes = require('../views');

// Using the API routes for any requests to '/api'
router.use('/api', apiRoutes);

// Exporting the router for use in other parts of the application
module.exports = router;