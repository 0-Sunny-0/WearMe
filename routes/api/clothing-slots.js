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