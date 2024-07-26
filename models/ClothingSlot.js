// Importing necessary modules from sequelize
const { Model, DataTypes } = require('sequelize');

// Importing the sequelize instance from the connection configuration
const sequelize = require('../config/connection.js');

// Defining the ClothingSlot class which extends the Model class from sequelize
class ClothingSlot extends Model {}

// Initializing the ClothingSlot model with its attributes and configurations
ClothingSlot.init(
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
    modelName: 'clothing_slot',
  }
);

// Exporting the ClothingSlot model for use in other parts of the application
module.exports = ClothingSlot;