const router = require('express').Router();
const { Outfit, OutfitItem } = require('../../models');

// GET all closet categories
router.get('/', async (req, res) => {
  try {
    const alloutfit = await Outfit.findAll();
    res.status(200).json(alloutfit);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get individual outfits
router.get('/', async (req, res) => {
  try {
    const oneoutfit = await Outfit.findOne();
    if (!oneoutfit) {
      res.status(404).json( {message: 'No outfit with this id!'});
      return;
    }
    res.status(200).json(oneoutfit);
  } catch (err) {
    res.status(500).json(err);
  }
});
//  Create an outfit
router.post('/', async (req, res) => {
  try {
    const createoutfit = await Outfit.create(req.body);
    res.status(200).json(createoutfit);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update an outfit
router.put('/', async (req, res) => {
  try {
    const updateoutfit = await Outfit.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updateoutfit);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Remove an outfit
router.delete('/', async (req, res) => {
  try {
    const deleteoutfit = await Outfit.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteoutfit) {
      res.status.json( {message: 'No Outfit with this id!'});
      return;
    }
    res.status(200).json(deleteoutfit)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;