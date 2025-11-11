// Load enviroment variables from the .env file
require('dotenv').config({ path: '.env' });
const { Sequelize } = require('sequelize');

const db = new Sequelize({
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.BD_DATABASE,
    port: process.env.DB_PORT,
    logging: false
})

module.exports = { db }