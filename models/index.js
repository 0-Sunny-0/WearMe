const Outfit = require('./Outfit');
const Closet = require('./Closet');
const OutfitItem = require('./OutfitItem');
const User = require('./User');

User.hasOne(Closet, {
    foreignKey: 'user.id'
});

Closet.belongsTo(User, {
    foreignKey: 'user.id'
});

Outfit.hasMany(OutfitItem, {
    foreignKey: 'outfit.id'
});

OutfitItem.belongsTo(Outfit, {
    foreignKey: 'outfit.id'
})

module.exports = { Outfit, Closet, OutfitItem, User };