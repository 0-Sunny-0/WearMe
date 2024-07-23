const { Model, DataTypes } = require('sequelize');
const sequelize = require('../controllers/connection');

class Clothing_slot extends Model {}

Clothing_slot.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    }
})

