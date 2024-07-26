const router = require('express').Router();
const { ClosetCategory, Outfit, OutfitItem } = require('../../models');

// GET all closet categories
router.get('/', async (req, res) => {
  try {
    const closetCategories = await ClosetCategory.findAll({
      include: [{ model: Outfit }, { model: OutfitItem }],
    });
    res.status(200).json(closetCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET one closet category
router.get('/:id', async (req, res) => {
  try {
    const oneCategory = await ClosetCategory.findByPk(req.params.id, {
      include: [{ model: Outfit }, { model: OutfitItem }],
    });
    if (!oneCategory) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(oneCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST - creates a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await ClosetCategory.create(req.body)
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//PUT - update a category by 'id' value
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await ClosetCategory.update({closet_cateogry: req.body.closet_cateogry,},
  {where: {
    id: req.params.id,
  }})
  res.status(200).json(categoryData);
  }
  catch(err){
    res.status(500).json(err);
  }
});

//DELETE a category by 'id' value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await ClosetCategory.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      req.status(404).json({ message: 'No category found with that id!'});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;