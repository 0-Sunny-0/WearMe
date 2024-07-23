const { Model, DataTypes } = require('sequelize');

const sequelize = require('../controllers/connection');

class Closet_category extends Model {}

Closet_category.init({
    users: {
        id: DataTypes.INTEGER,         
    },
    username: {
        type: DataTypes.STRING
    }
});

