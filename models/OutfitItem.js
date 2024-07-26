// Importing necessary modules from sequelize
const { Model, DataTypes } = require('sequelize');

// Importing the sequelize instance from the connection configuration
const sequelize = require('../config/connection.js');

// Defining the OutfitItem class which extends the Model class from sequelize
class OutfitItem extends Model {}

// Initializing the OutfitItem model with its attributes and configurations
OutfitItem.init(
  {
    // Defining the id attribute with type INTEGER, primary key, and auto-increment
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    // Defining the name attribute with type STRING and not allowing null values
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Defining the category_id attribute with type INTEGER and not allowing null values
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Defining the slot_id attribute with type STRING and not allowing null values
    slot_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Defining the image_path attribute with type STRING and not allowing null values
    image_path: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Defining the owner attribute with type STRING and not allowing null values
    owner: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // Passing the sequelize instance
    sequelize,
    // Disabling the automatic addition of timestamp fields (createdAt, updatedAt)
    timestamps: false,
    // Freezing the table name to prevent sequelize from pluralizing it
    freezeTableName: true,
    // Using underscored naming convention for automatically added fields
    underscored: true,
    // Setting the model name
    modelName: 'outfit_item',
  }
);

// Exporting the OutfitItem model for use in other parts of the application
module.exports = OutfitItem;