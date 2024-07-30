const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/withAuth');

// Route to get all users and render the home page
router.get('/home', withAuth, async (req, res) => {
  try {
    // Fetch all users, excluding their passwords, and order by name
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['username', 'ASC']],
    });

    // Serialize user data
    const users = userData.map((user) => user.get({ plain: true }));

    // Render the home page with user data and session info
    res.render('partials/home')
  } catch (err) {
    // Send error response in case of any issues
    res.status(500).json(err);
  }
});

// Route to render the login page
router.get('/login', (req, res) => {
  res.render('login');
});

// Route to render the register page
router.get('/register', (req, res) => {
  res.render('register');
});

// Route to render the home page with the closet section
router.get('/closet', (req, res) => {
  // Pass the current URL path to the template
  res.render('home', { url: req.path });
});

// Route to render the home page with the outfits section
router.get('/outfits', (req, res) => {
  // Pass the current URL path to the template
  res.render('home', { url: req.path });
});

// Route to render the home page with the shirts section
router.get('/shirts', (req, res) => {
  // Pass the current URL path to the template
  res.render('home', { url: req.path });
});

// Route to render the home page with the legwear section
router.get('/legwear', (req, res) => {
  // Pass the current URL path to the template
  res.render('home', { url: req.path });
});

// Route to render the home page with the footwear section
router.get('/footwear', (req, res) => {
  // Pass the current URL path to the template
  res.render('home', { url: req.path });
});

// Export the router to be used in other parts of the routerlication
module.exports = router;