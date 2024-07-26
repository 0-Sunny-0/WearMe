const router = require('express').Router();
const { ClosetCategory } = require('../../models');

// GET all closet categories
router.get('/', async (req, res) => {
  try {
    const closetCategories = await ClosetCategory.findAll();
    res.status(200).json(closetCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET one closet item
router.get('/:id', async (req, res) => {
  try {
    const oneItem = await User.findByPk(req.params.id);
    if (!oneItem) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(oneItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;