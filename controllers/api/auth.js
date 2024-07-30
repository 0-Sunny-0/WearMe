const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

// Route for user login
router.post('/login', async (req, res) => {
  try {
    // Find user by username
    const userData = await User.findOne({ where: { username: req.body.username } });

    // If user not found, send error response
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username' });
      return;
    }

    // Check if the provided password is valid
    const validPassword = await userData.checkPassword(req.body.password);

    // If password is invalid, send error response
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password' });
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
    res.status(400).json({error: err.message});
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
    res.status(400).json({error: err.message});
  }
});

// Route to handle user registration
router.post('/register', async (req, res) => {
  try {
    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user with the hashed password
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // Save the user session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      // Respond with the created user data
      res.json(userData);
    });
  } catch (err) {
    // Handle any errors that occur during user creation
    res.status(400).json({error: err.message});
    console.log(err);
  }
});

module.exports = router;