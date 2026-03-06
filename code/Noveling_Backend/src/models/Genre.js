import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Genre extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idGenre: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Genre',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idGenre" },
        ]
      },
    ]
  });
  }
}
