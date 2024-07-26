const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Adjust the path as necessary
const User = require('./User'); // Adjust the path as necessary

class Closet extends Model {}

// Initializing the Closet model with its attributes and configurations
Closet.init(
  {
    // Defining the user_id attribute with type INTEGER, primary key, and auto-increment
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: User,
        key: 'id',
      },
    },
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
    modelName: 'closet_slot',
  }
);

// Defining the association
Closet.belongsTo(User, { foreignKey: 'user_id' });

// Exporting the Closet model for use in other parts of the application
module.exports = Closet;