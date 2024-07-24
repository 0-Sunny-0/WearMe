const Outfit = require('./Outfit');
const ClothingSlot = require('./ClothingSlot');
const OutfitItem = require('./OutfitItem');
const User = require('./User');
const ClosetCategory = require('./ClosetCategory');

User.hasMany (Outfit, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

module.exports = { Outfit, ClothingSlot, OutfitItem, User, ClosetCategory };