// Dependencies
// Sequelize constructor
const Sequelize = require('sequelize');
// dotenv for local environmental variables for user name and password
require('dotenv').config();

let sequelize;


  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });


module.exports = sequelize;
