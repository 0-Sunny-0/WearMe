// Middleware function to check if the user is authenticated
const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect them to the login page
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    // If the user is logged in, proceed to the next middleware or route handler
    next();
  }
};

// Export the withAuth middleware function for use in other parts of the application
module.exports = withAuth;