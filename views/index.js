// Import the Express router
const router = require('express').Router();

// Define a route for the '/home' URL
// When a GET request is made to '/home', render the 'home' view
router.get('/home', async (req, res) => {
  res.render('home');
});

// Define a route for the '/login' URL
// When a GET request is made to '/login', render the 'login' view
router.get('/login', async (req, res) => {
  res.render('login');
});

// Export the router to be used in other parts of the application
module.exports = router;