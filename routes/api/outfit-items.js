const router = require('express').Router();
const { OutfitItem } = require('../../models');

// GET all closet categories
router.get('/', async (req, res) => {
  try {
    const closetCategories = await OutfitItem.findAll();
    res.status(200).json(closetCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;