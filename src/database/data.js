const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Certificacao = require('../models/Certificacao');
const Corretor = require('../models/Corretor');
const Contato = require('../models/Contato');
const Empresa = require('../models/Empresa')

//Inicando conexão com o banco de dados.
const connection = new Sequelize(dbConfig);

//Tratando conexão com o banco de dados.
connection.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

//iniciando moldels
Certificacao.init(connection);
Corretor.init(connection);
Contato.init(connection);
Empresa.init(connection);

//iniciando relacionamentos
Certificacao.associate(connection.models);
Corretor.associate(connection.models);
Contato.associate(connection.models);
Empresa.associate(connection.models);
