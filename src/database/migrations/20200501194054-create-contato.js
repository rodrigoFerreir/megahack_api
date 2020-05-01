'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('contatos', { 
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
        id_consultor:{
          type: Sequelize.INTEGER,
          references:{ model:'corretores', key:'id' },
          onUpdate:'cascade',
          onDelete:'restrict',
          allowNull: false,
        },
        telefone:{
          type: Sequelize.TEXT,
        },
        email:{
          type: Sequelize.TEXT,
        },
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('contatos');
  }
};
