const { Model, DataTypes } = require('sequelize');

class Certificacao extends Model{
  static init(connection){
    super.init({
      nome: DataTypes.TEXT,
      orgao_regulador: DataTypes.TEXT,
      numeracao: DataTypes.NUMBER,
    }, {
      sequelize: connection,
      modelName:'Certificacao',
      tableName: 'certificacao'
    })
  };

  static associate(models){
    this.belongsTo(models.Corretor, {foreignKey: 'id_consultor', as: "certificacao"});
  };
};
module.exports = Certificacao;