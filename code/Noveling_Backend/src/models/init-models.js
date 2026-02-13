import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Author from  "./Author.js";
import _Book from  "./Book.js";
import _Genre from  "./Genre.js";
import _StatusBook from  "./StatusBook.js";
import _User_ from  "./User_.js";
import _contenir from  "./contenir.js";
import _etre_ecrit from  "./etre_ecrit.js";

export default function initModels(sequelize) {
  const Author = _Author.init(sequelize, DataTypes);
  const Book = _Book.init(sequelize, DataTypes);
  const Genre = _Genre.init(sequelize, DataTypes);
  const StatusBook = _StatusBook.init(sequelize, DataTypes);
  const User_ = _User_.init(sequelize, DataTypes);
  const contenir = _contenir.init(sequelize, DataTypes);
  const etre_ecrit = _etre_ecrit.init(sequelize, DataTypes);

  Author.belongsToMany(Book, { as: 'idBook_Book_etre_ecrits', through: etre_ecrit, foreignKey: "idAuthor", otherKey: "idBook" });
  Book.belongsToMany(Author, { as: 'idAuthor_Authors', through: etre_ecrit, foreignKey: "idBook", otherKey: "idAuthor" });
  Book.belongsToMany(Genre, { as: 'idGenre_Genres', through: contenir, foreignKey: "idBook", otherKey: "idGenre" });
  Genre.belongsToMany(Book, { as: 'idBook_Books', through: contenir, foreignKey: "idGenre", otherKey: "idBook" });
  etre_ecrit.belongsTo(Author, { as: "idAuthor_Author", foreignKey: "idAuthor"});
  Author.hasMany(etre_ecrit, { as: "etre_ecrits", foreignKey: "idAuthor"});
  StatusBook.belongsTo(Book, { as: "idBook_Book", foreignKey: "idBook"});
  Book.hasMany(StatusBook, { as: "StatusBooks", foreignKey: "idBook"});
  contenir.belongsTo(Book, { as: "idBook_Book", foreignKey: "idBook"});
  Book.hasMany(contenir, { as: "contenirs", foreignKey: "idBook"});
  etre_ecrit.belongsTo(Book, { as: "idBook_Book", foreignKey: "idBook"});
  Book.hasMany(etre_ecrit, { as: "etre_ecrits", foreignKey: "idBook"});
  contenir.belongsTo(Genre, { as: "idGenre_Genre", foreignKey: "idGenre"});
  Genre.hasMany(contenir, { as: "contenirs", foreignKey: "idGenre"});
  StatusBook.belongsTo(User_, { as: "idUser_User_", foreignKey: "idUser"});
  User_.hasMany(StatusBook, { as: "StatusBooks", foreignKey: "idUser"});

  return {
    Author,
    Book,
    Genre,
    StatusBook,
    User_,
    contenir,
    etre_ecrit,
  };
}
