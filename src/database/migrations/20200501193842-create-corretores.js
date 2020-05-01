'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('corretores', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        nome:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        sexo:{
          type: Sequelize.STRING,
        },
        idade:{
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        tempo_atuação:{
          type: Sequelize.STRING,
          allowNull: false,
        }, 
        descricao:{
          type: Sequelize.TEXT,
          allowNull: false
        },
        id_empresa:{
          type: Sequelize.INTEGER,
          references:{ model:'empresas', key:'id' },
          onUpdate:'cascade',
          onDelete:'set null',
          allowNull: false,
        },
        });

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('corretores');
  }
};
