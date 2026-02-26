import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Book extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idBook: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    addedOnDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    urlCover: {
      type: DataTypes.STRING(2000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Book',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idBook" },
        ]
      },
    ]
  });
  }
}
