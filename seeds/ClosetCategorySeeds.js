const { ClosetCategory } = require('../models');

// Array of category objects to seed the database
const closetCategoryData = [
  {
    category_name: 'Shoes', // Category for shoes
  },
  {
    category_name: 'Socks', // Category for socks
  },
  {
    category_name: 'Hat', // Category for hats
  },
  {
    category_name: 'Jacket', // Category for jackets
  },
  {
    category_name: 'Sweater', // Category for sweaters
  },
  {
    category_name: 'Suit', // Category for suits
  },
  {
    category_name: 'Dress', // Category for dresses
  },
  {
    category_name: 'Skirt', // Category for skirts
  }
];

// Function to bulk create categories in the database
const seedCategories = () => ClosetCategory.bulkCreate(closetCategoryData);

// Export the seedCategories function for use in other parts of the application
module.exports = seedCategories;