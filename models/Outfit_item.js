const { Model, DataTypes } = require('sequelize');
const sequelize = require('../controllers/connection');

class Outfit_item extends Model {}

Outfit_item.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: varchar,
    },
    category_id: {
        type: DataTypes.INTEGER,
    },
    slot_id: {
        type: DataTypes.STRING,
    },
    owner: {
        type: varchar
    }
   });

   module.exports = Outfit_item;