import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class User_ extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idUser: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mail: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "mail"
    },
    pseudo: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "pseudo"
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'User_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idUser" },
        ]
      },
      {
        name: "mail",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mail" },
        ]
      },
      {
        name: "pseudo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pseudo" },
        ]
      },
    ]
  });
  }
}
