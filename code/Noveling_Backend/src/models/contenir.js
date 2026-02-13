import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class contenir extends Model {
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
    idGenre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Genre',
        key: 'idGenre'
      }
    }
  }, {
    sequelize,
    tableName: 'contenir',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idBook" },
          { name: "idGenre" },
        ]
      },
      {
        name: "idGenre",
        using: "BTREE",
        fields: [
          { name: "idGenre" },
        ]
      },
    ]
  });
  }
}
