const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

//Inicando conexão com o banco de dados.
const connection = new Sequelize(dbConfig);

//Tratando conexão com o banco de dados.
connection.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });