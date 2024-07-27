// Import the Express router
const router = require('express').Router();

// Define a route for the root URL ('/')
router.get('/', async (req, res) => {
  // Render the 'home' view when the root URL is accessed
  res.render('home');
});

router.get('/login', async (req, res) => {
  // Render the 'home' view when the root URL is accessed
  res.render('login');
});

// Export the router to be used in other parts of the application
module.exports = router;