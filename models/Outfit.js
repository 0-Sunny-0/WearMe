const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Outfit extends Model {}

Outfit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    items: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'outfit',
  }
);

module.exports = Outfit;
