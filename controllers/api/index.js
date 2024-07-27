const router = require('express').Router();
const userRoutes = require('./userRoutes');
const closets = require('./closets');
const outfitItems = require('./outfit-items');
const outfits = require('./outfits');

router.use('/users', userRoutes);

router.use('/closets', closets);
router.use('/outfit-items', outfitItems);
router.use('/outfits', outfits);

module.exports = router;


