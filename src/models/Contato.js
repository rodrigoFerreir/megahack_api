const { Model, DataTypes } = require('sequelize');

class Contato extends Model{
  static init(connection){
    super.init({
      telefone: DataTypes.TEXT,
      email: DataTypes.TEXT,
    }, {
      sequelize: connection,
      modelName:'Contato'
    })
  };

  static associate(models){
    this.belongsTo(models.Corretor, {foreignKey: 'id_consultor', as: "contato"});
  };
};
module.exports = Contato;
