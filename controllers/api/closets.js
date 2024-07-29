const router = require('express').Router();
const { Closet } = require('../../models');

// GET all closets
router.get('/', async (req, res) => {
  try {
    const closets = await Closet.findAll();
    res.status(200).json(closets);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;