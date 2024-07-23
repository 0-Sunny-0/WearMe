const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class ClosetCategory extends Model {}

ClosetCategory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    closet_category: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ClosetCategory',
  }
);

module.exports = ClosetCategory;
