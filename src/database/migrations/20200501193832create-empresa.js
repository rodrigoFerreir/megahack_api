'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('empresas', { 
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
        telefone:{
          type: Sequelize.TEXT,
        },
        email:{
          type: Sequelize.TEXT,
        },
        site:{
          type: Sequelize.TEXT
        },
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('empresas');
  }
};
