const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class ClothingSlot extends Model {}

ClothingSlot.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ClothingSlot',
  }
);

module.exports = ClothingSlot;
