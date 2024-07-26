// Importing necessary modules from sequelize
const { Model, DataTypes } = require('sequelize');

// Importing the sequelize instance from the connection configuration
const sequelize = require('../config/connection.js');

// Defining the ClosetCategory class which extends the Model class from sequelize
class ClosetCategory extends Model {}

// Initializing the ClosetCategory model with its attributes and configurations
ClosetCategory.init(
  {
    // Defining the id attribute with type INTEGER, primary key, and auto-increment
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    // Defining the name attribute with type INTEGER (should be STRING) and not allowing null values
    name: {
      type: DataTypes.INTEGER, // This should likely be DataTypes.STRING
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
    modelName: 'closet_category',
  }
);

// Exporting the ClosetCategory model for use in other parts of the application
module.exports = ClosetCategory;