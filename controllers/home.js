const router = require('express').Router();

// Route to render the closet partial
router.get('/closet', (req, res) => {
  res.render('home', { partial: 'closet' });
});

// Route to render the outfits partial
router.get('/outfits', (req, res) => {
  res.render('home', { partial: 'outfits' });
});

// Route to render the shirts partial
router.get('/shirts', (req, res) => {
  res.render('home', { partial: 'shirts' });
});

// Route to render the legwear partial
router.get('/legwear', (req, res) => {
  res.render('home', { partial: 'legwear' });
});

// Route to render the footwear partial
router.get('/footwear', (req, res) => {
  res.render('home', { partial: 'footwear' });
});

module.exports = router;