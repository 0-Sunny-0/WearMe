// Import the OutfitItem model from the models directory
const { OutfitItem } = require('../models');

// Array to hold outfit item data for seeding
const outfitItemData = [
  // Add outfit item objects here
];

// Function to bulk create outfit items in the database
const seedOutfitItems = () => OutfitItem.bulkCreate(outfitItemData);

// Export the seedOutfitItems function for use in other parts of the application
module.exports = seedOutfitItems;