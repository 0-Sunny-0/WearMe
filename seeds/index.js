
// Import the Sequelize connection instance
const sequelize = require('../config/connection');
// Import seed functions for different data models
const seedOutfits = require('./OutfitSeeds');
const seedOutfitItems = require('./OutfitItemSeeds');

// Function to seed all data models
const seedAll = async () => {
  // Sync the database and force drop/recreate tables
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  // Seed outfits
  await seedOutfits();
  console.log('\n----- OUTFITS SEEDED -----\n');

  // Seed outfit items
  await seedOutfitItems();
  console.log('\n----- OUTFIT ITEMS SEEDED -----\n');

  // Exit the process after seeding is complete
  process.exit(0);
};

// Call the seedAll function to start seeding
seedAll();