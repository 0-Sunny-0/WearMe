const router = require('express').Router();
const { OutfitItem } = require('../../models');

// GET all outfit items
router.get('/', async (req, res) => {
  try {
    const outfitItems = await OutfitItem.findAll();
    res.status(200).json(outfitItems);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;