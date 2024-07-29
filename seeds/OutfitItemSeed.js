// Import the OutfitItem model from the models directory
const { OutfitItem } = require('../models');

// Array to hold outfit item data for seeding
const outfitItemData = [
  {
    name: 'Hawaiian Shirt',
    outfit_id: 1,
    clothing_type: 'Shirt',
    image_url: 'https://th.bing.com/th/id/OIG3..YOZ_repXxsTGNOig7uy?w=1024&h=1024&rs=1&pid=ImgDetMain'
  },
  {
    name: 'Beach Shorts',
    outfit_id: 1,
    clothing_type: 'Legwear',
    image_url: 'https://th.bing.com/th/id/OIG1.RlYcxsQvnULVGPrtyb9R?w=1024&h=1024&rs=1&pid=ImgDetMain'
  },
  {
    name: 'Flip Flops',
    outfit_id: 1,
    clothing_type_id: 'Footwear',
    image_url: 'https://th.bing.com/th/id/OIG3.wqBnChsIj30Ly3rKnYrJ?pid=ImgGn'
  },
  {
    name: 'Punk Shirt',
    outfit_id: 2,
    clothing_type: 'Shirt',
    image_url: 'https://th.bing.com/th/id/OIG1.U1P3dnuEvmx4en2FiP_t?w=1024&h=1024&rs=1&pid=ImgDetMain'
  },
  {
    name: 'Torn Jeans',
    outfit_id: 2,
    clothing_type: 'Legwear',
    image_url: 'https://th.bing.com/th/id/OIG1.7zwVop85i4JYa.omDlBE?w=1024&h=1024&rs=1&pid=ImgDetMain'
  },
  {
    name: 'Punk Boots',
    outfit_id: 2,
    clothing_type: 'Footwear',
    image_url: 'https://th.bing.com/th/id/OIG2.p9DMXMI_UoP.i6Zj25hE?pid=ImgGn'
  }
];

// Function to bulk create outfit items in the database
const seedOutfitItems = () => OutfitItem.bulkCreate(outfitItemData);

// Export the seedOutfitItems function for use in other parts of the application
module.exports = seedOutfitItems;