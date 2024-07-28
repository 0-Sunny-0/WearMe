// Import the Outfit model from the models directory
const { Outfit } = require('../models');

// Array to hold outfit data for seeding
const outfitData = [
  // Add outfit objects here
  {
    name: 'Aloha'
  },
  {
    name: 'Punk'
  },
];

// Function to bulk create outfits in the database
const seedOutfits = () => Outfit.bulkCreate(outfitData);

// Export the seedOutfits function for use in other parts of the application
module.exports = seedOutfits;