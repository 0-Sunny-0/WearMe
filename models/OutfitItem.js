const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class OutfitItem extends Model {}

OutfitItem.init(
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
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    slot_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_path: {
      type: DataTypes.STRING,
      allowNull: false
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTERGER,
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
    modelName: 'outfit-item',
  }
);

module.exports = OutfitItem;
