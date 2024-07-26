const router = require('express').Router();
const { OutfitItem } = require('../../models');

// GET all closet categories
router.get('/', async (req, res) => {
  try {
    const allItem = await OutfitItem.findAll();
    res.status(200).json(allItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get an accessory
router.get('/', async (req, res) => {
  try {
    const oneItem = await OutfitItem.findOne();
    if (!oneItem) {
      res.status(404).json( {message: 'No outfit item with this id!'});
      return;
    }
    res.status(200).json(oneItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create an accessory
router.post('/', async (req, res) => {
  try {
    const createitem = await OutfitItem.create(req.body
    //   {  
    //   // user_id: req.body.user_id,
    //   // This is wrong at some point
    // }
    );
    res.status(200).json(createitem);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update an accessory
router.put('/', async (req, res) => {
  try { 
    const updateitem = await OutfitItem.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updateitem);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Remove an accessory
router.delete('/', async (req, res) => {
  try {
    const deleteitem = await OutfitItem.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteitem) {
      res.status(404).json( {message: 'No outfit item with this id!'});
      return;
    }
    res.status(200).json(deleteitem);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;