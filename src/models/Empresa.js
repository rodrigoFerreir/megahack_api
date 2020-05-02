const {
  Model,
  DataTypes
} = require('sequelize');

class Empresa extends Model {
  static init(connection) {
    super.init({
      telefone: DataTypes.TEXT,
      email: DataTypes.TEXT,
      site: DataTypes.TEXT,
    }, {
      sequelize: connection,
      modelName: 'Empresa',
      tableName: 'empresas'
    })
  };

  static associate(models) {
    this.hasMany(models.Corretor, {
      foreignKey: 'id_empresa',
      as: "empresa"
    });
  };
};
module.exports = Empresa;