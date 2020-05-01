'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('certificacao', { 
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
        nome:{
          type: Sequelize.TEXT,
          allowNull:false
        },
        orgao_regulador:{
          type: Sequelize.TEXT,
          allowNull:false
        },
        numeracao:{
          type: Sequelize.NUMERIC,
          allowNull:false,
        },
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('certificacao');
  }
};
