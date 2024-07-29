const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Route to get all users and render the home page
router.get('/', withAuth, async (req, res) => {
  try {
    // Fetch all users, excluding their passwords, and order by name
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    // Serialize user data
    const users = userData.map((project) => project.get({ plain: true }));

    // Render the home page with user data and session info
    res.render('home', {
      users,
      logged_in: req.session.logged_in,
    });
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

module.exports = router;