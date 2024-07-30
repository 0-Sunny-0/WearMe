const router = require('express').Router();
const closets = require('./closets');
const outfitItems = require('./outfit-items');
const outfits = require('./outfits');

router.use('/closets', closets);
router.use('/outfit-items', outfitItems);
router.use('/outfits', outfits);

module.exports = router;


