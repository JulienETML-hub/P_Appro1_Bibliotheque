import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class etre_ecrit extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idBook: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Book',
        key: 'idBook'
      }
    },
    idAuthor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Author',
        key: 'idAuthor'
      }
    }
  }, {
    sequelize,
    tableName: 'etre_ecrit',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idBook" },
          { name: "idAuthor" },
        ]
      },
      {
        name: "idAuthor",
        using: "BTREE",
        fields: [
          { name: "idAuthor" },
        ]
      },
    ]
  });
  }
}
