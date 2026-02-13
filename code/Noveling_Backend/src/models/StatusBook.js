import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class StatusBook extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idStatusBook: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    commentaireUtilisateur: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    dateDebutEmprunt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dateFinEmprunt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User_',
        key: 'idUser'
      }
    },
    idBook: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Book',
        key: 'idBook'
      }
    }
  }, {
    sequelize,
    tableName: 'StatusBook',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idStatusBook" },
        ]
      },
      {
        name: "idUser",
        using: "BTREE",
        fields: [
          { name: "idUser" },
        ]
      },
      {
        name: "idBook",
        using: "BTREE",
        fields: [
          { name: "idBook" },
        ]
      },
    ]
  });
  }
}
