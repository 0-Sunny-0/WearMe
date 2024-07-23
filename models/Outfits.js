const { Model, DataTypes } = require('sequelize');
const sequelize = require('../controllers/connection');

class Outfits extends Model {}

Outfits.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    items: {
        type: []
    },
    username: {
        type: varchar
    }
});