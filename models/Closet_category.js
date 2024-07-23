const { Model, DataTypes } = require('sequelize');

const sequelize = require('../controllers/connection');

class Closet_category extends Model {}

Closet_category.init({
    id: {
        type: DataTypes.INTEGER,   
        primaryKey: true,    
        autoIncrement: true  
    },
    category_name: {
        type: DataTypes.STRING
    }
});

