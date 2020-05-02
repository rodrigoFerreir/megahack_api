const {
  Model,
  DataTypes
} = require('sequelize');

class Corretor extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
      sexo: DataTypes.STRING,
      idade: DataTypes.INTEGER,
      tempo_atuacao: DataTypes.STRING,
      descricao: DataTypes.TEXT,
    }, {
      sequelize: connection,
      modelName: 'Corretor',
      tableName: 'corretores'
    })
  };

  static associate(models) {
    this.hasMany(models.Contato, {
      foreignKey: 'id_cosultor',
      as: 'contato'
    })
    this.hasOne(models.Certificacao, {
      foreignKey: 'id_consultor',
      as: 'certificacao'
    })
    this.belongsTo(models.Empresa, {
      foreignKey: 'id_empresa',
      as: 'empresa'
    });

  };
};
module.exports = Corretor;