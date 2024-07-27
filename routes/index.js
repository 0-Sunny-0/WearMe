// Import the Router class from the express module
const router = require('express').Router();

// Import the backend routes from the './api' directory
const backend = require('./api');

// Import the frontend routes from the '../views' directory
const frontend = require('../views');

// Serve frontend to '/'
router.use('/', frontend);

// Serve backend to '/api'
router.use('/api', backend);

// Export the router for use in other parts of the application
module.exports = router;