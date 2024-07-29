const router = require('express').Router();
const { User } = require('../../models');

// Route for user login
router.post('/login', async (req, res) => {
  try {
    // Find user by email
    const userData = await User.findOne({ where: { email: req.body.email } });

    // If user not found, send error response
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Check if the provided password is valid
    const validPassword = await userData.checkPassword(req.body.password);

    // If password is invalid, send error response
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Save user session and set session variables
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      // Send success response
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    // Send error response in case of any issues
    res.status(400).json(err);
  }
});

// Route for user logout
router.post('/logout', (req, res) => {
  // Check if user is logged in
  if (req.session.logged_in) {
    // Destroy the session and send success response
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    // If user is not logged in, send error response
    res.status(404).end();
  }
});

module.exports = router;