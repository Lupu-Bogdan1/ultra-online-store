const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    process.env.DB_NAME, // denumirea bazei de date
    process.env.DB_USER, // userul
    process.env.DB_PASSWORD, // parola
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
);