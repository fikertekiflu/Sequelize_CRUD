const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('tadiwos', 'root', 'fiker2901#@!', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
