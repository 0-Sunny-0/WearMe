const Closet_category = require('./Closet_category');
const Clothing_slot = require('./Clothing_slot');
const Outfit_item = require('./Outfit_item');
const Outfits = require('./Outfits');
const Users = require('./Users');

Closet_category.hasOne(category_id, {
    through: {
        model: Outfit_item, 
        unique: false
    },
});

Clothing_slot.hasOne(slot_id, {
    through: {
        model: Outfit_item,
        unique: false
    },
});

Outfit_item.belongsToMany(Users, {
    through: {
        model: Outfits,
        model: Closet_category,
        model: Clothing_slot,
        unique: false
    },
});

module.exports = {Closet_category, Clothing_slot, Outfit_item, Outfits, Users };

// not sure if the relationships are correct and if we should define an alias for when data is received