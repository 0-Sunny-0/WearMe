const { Model, DataTypes } = require('sequelize');
const sequelize = require('../controllers/connection');

class Users extends Model {}

Users.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: varchar,
    }
});