const router = require('express').Router();
const { Outfit } = require('../../models');

// GET all closet categories
router.get('/', async (req, res) => {
  try {
    const outfits = await Outfit.findAll();
    res.status(200).json(outfits);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;