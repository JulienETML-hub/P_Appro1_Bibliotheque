import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Author extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idAuthor: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    prename: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Author',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idAuthor" },
        ]
      },
    ]
  });
  }
}
