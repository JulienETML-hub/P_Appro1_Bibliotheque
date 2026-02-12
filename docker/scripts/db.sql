CREATE DATABASE IF NOT EXISTS NovelingDB;
USE NovelingDB;
CREATE TABLE Book(
   idBook INT AUTO_INCREMENT,
   title VARCHAR(100),
   description VARCHAR(5000),
   addedOnDate DATE,
   PRIMARY KEY(idBook)
);

CREATE TABLE User_(
   idUser INT AUTO_INCREMENT,
   mail VARCHAR(50),
   pseudo VARCHAR(50),
   isAdmin BOOLEAN,
   PRIMARY KEY(idUser),
   UNIQUE(mail),
   UNIQUE(pseudo)
);

CREATE TABLE Genre(
   idGenre INT AUTO_INCREMENT,
   description VARCHAR(5000),
   PRIMARY KEY(idGenre)
);

CREATE TABLE Author(
   idAuthor INT AUTO_INCREMENT,
   name VARCHAR(50),
   prename VARCHAR(50),
   PRIMARY KEY(idAuthor)
);

CREATE TABLE StatusBook(
   idStatusBook INT AUTO_INCREMENT,
   commentaireUtilisateur VARCHAR(5000),
   dateDebutEmprunt DATETIME,
   dateFinEmprunt DATETIME,

   isActive BOOLEAN 
    AS(dateFinEmprunt < NOW())
    STORED,
   idUser INT NOT NULL,
   idBook INT NOT NULL,
   PRIMARY KEY(idStatusBook),
   FOREIGN KEY(idUser) REFERENCES User_(idUser),
   FOREIGN KEY(idBook) REFERENCES Book(idBook)
);

CREATE TABLE contenir(
   idBook INT,
   idGenre INT,
   PRIMARY KEY(idBook, idGenre),
   FOREIGN KEY(idBook) REFERENCES Book(idBook),
   FOREIGN KEY(idGenre) REFERENCES Genre(idGenre)
);

CREATE TABLE etre_ecrit(
   idBook INT,
   idAuthor INT,
   PRIMARY KEY(idBook, idAuthor),
   FOREIGN KEY(idBook) REFERENCES Book(idBook),
   FOREIGN KEY(idAuthor) REFERENCES Author(idAuthor)
);
