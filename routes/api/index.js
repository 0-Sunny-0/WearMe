const router = require('express').Router();
const closetCategories = require('./closet-categories');
const clothingSlots = require('./clothing-slots');
const outfitItems = require('./outfit-items');
const outfits = require('./outfits');

router.use('/closet-categories', closetCategories);
router.use('/clothing-slots', clothingSlots);
router.use('/outfit-items', outfitItems);
router.use('/outfits', outfits);

module.exports = router;
