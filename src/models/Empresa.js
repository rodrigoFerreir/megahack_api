const { Model, DataTypes } = require('sequelize');

class Empresa extends Model{
  static init(connection){
    super.init({
      telefone: DataTypes.TEXT,
      email: DataTypes.TEXT,
      site: DataTypes.TEXT,
    }, {
      sequelize: connection,
      modelName:'Empresa'
    })
  };

  static associate(models){
    this.belongsTo(models.Corretor, {foreignKey: 'id_consultor', as: "empresa"});
  };
};
module.exports = Empresa;