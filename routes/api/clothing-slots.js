const router = require('express').Router();
const { ClothingSlot } = require('../../models');

// GET all closet categories
router.get('/', async (req, res) => {
  try {
    const closetCategories = await ClothingSlot.findAll();
    res.status(200).json(closetCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET one clothing slot
router.get('/:id', async (req, res) => {
  try {
    const clothSlot = await User.findByPk(req.params.id);
    if (!clothSlot) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(clothSlot);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;