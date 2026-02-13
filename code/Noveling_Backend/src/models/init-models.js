import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Author from  "./Author.js";
import _Book from  "./Book.js";
import _Genre from  "./Genre.js";
import _StatusBook from  "./StatusBook.js";
import _User_ from  "./User_.js";

export default function initModels(sequelize) {
  const Author = _Author.init(sequelize, DataTypes);
  const Genre = _Genre.init(sequelize, DataTypes);
  const StatusBook = _StatusBook.init(sequelize, DataTypes);
  const User_ = _User_.init(sequelize, DataTypes);
  const Book = _Book.init(sequelize, DataTypes);

/*
  StatusBook.belongsTo(Book, { as: "idBook_Book", foreignKey: "idBook"});

  StatusBook.belongsTo(User_, { as: "idUser_User_", foreignKey: "idUser"});
  User_.hasMany(StatusBook, { as: "StatusBooks", foreignKey: "idUser"});
  Author.hasMany(Book, { as: "Books", foreignKey: "idAuthor"});
  Genre.hasMany(Book, { as: "Books", foreignKey: "idGenre"});
  Book.hasMany(StatusBook, { as: "StatusBooks", foreignKey: "idBook"});
  Book.belongsTo(Author, { as: "idAuthor_Author", foreignKey: "idAuthor"});
  Book.belongsTo(Genre, { as: "idGenre_Genre", foreignKey: "idGenre"});
*/
  return {
    Author,
    Book,
    Genre,
    StatusBook,
    User_,
  };
}
