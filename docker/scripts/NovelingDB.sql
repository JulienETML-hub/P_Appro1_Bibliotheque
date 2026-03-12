-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : db:3306
-- Généré le : jeu. 12 mars 2026 à 09:09
-- Version du serveur : 8.0.30
-- Version de PHP : 8.0.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `NovelingDB`
--
CREATE DATABASE IF NOT EXISTS `NovelingDB` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `NovelingDB`;

-- --------------------------------------------------------

--
-- Structure de la table `Author`
--

CREATE TABLE IF NOT EXISTS `Author` (
  `idAuthor` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `prename` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idAuthor`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Author`
--

INSERT INTO `Author` (`idAuthor`, `name`, `prename`) VALUES
(1, 'Rowling', 'J.K.'),
(2, 'Orwell', 'George'),
(3, 'Tolkien', 'J.R.R.'),
(4, 'Camus', 'Albert'),
(5, 'Herbert', 'Frank'),
(6, 'King', 'Stephen'),
(7, 'Martin', 'George R.R.'),
(8, 'Tolkien', 'J.R.R.'),
(9, 'Orwell', 'George'),
(10, 'Herbert', 'Frank'),
(11, 'Asimov', 'Isaac'),
(12, 'Huxley', 'Aldous'),
(13, 'Bradbury', 'Ray'),
(14, 'King', 'Stephen'),
(15, 'Stoker', 'Bram'),
(16, 'Shelley', 'Mary'),
(17, 'Salinger', 'J.D.'),
(18, 'Lee', 'Harper'),
(19, 'Melville', 'Herman'),
(20, 'Fitzgerald', 'F. Scott'),
(21, 'Dostoevsky', 'Fyodor'),
(22, 'Coelho', 'Paulo'),
(23, 'Rothfuss', 'Patrick'),
(24, 'McCarthy', 'Cormac'),
(25, 'Hugo', 'Victor'),
(26, 'Lewis', 'C.S.'),
(27, 'Larsson', 'Stieg'),
(28, 'Flynn', 'Gillian'),
(29, 'Brown', 'Dan'),
(30, 'Collins', 'Suzanne');

-- --------------------------------------------------------

--
-- Structure de la table `Book`
--

CREATE TABLE IF NOT EXISTS `Book` (
  `idBook` int NOT NULL AUTO_INCREMENT,
  `title` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `addedOnDate` date DEFAULT NULL,
  `urlCover` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`idBook`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Book`
--

INSERT INTO `Book` (`idBook`, `title`, `description`, `addedOnDate`, `urlCover`) VALUES
(1, 'Harry Potter à l\'école des sorciers', 'Avant que la magie ne révèle son véritable visage, il faut accepter de croire à l’impossible. Cette histoire commence dans un monde ordinaire, où les mystères se cachent derrière les portes closes et les regards distraits. Mais parfois, un enfant découvre que son destin dépasse les murs de son quotidien. Ce livre est une invitation à franchir le seuil, à accepter l’émerveillement et à comprendre que le courage naît souvent dans l’ignorance de ce qui nous attend.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9782070643028-L.jpg'),
(2, '1984', 'Il existe des sociétés où la vérité est façonnée par le pouvoir. Là où les mots sont surveillés et les pensées corrigées, l’individu devient fragile. Ce récit n’est pas seulement une fiction : c’est un avertissement. À travers les yeux d’un homme ordinaire, nous pénétrons dans un monde où la liberté s’efface, lentement, méthodiquement, jusqu’à ce qu’il ne reste plus que l’ombre de ce que signifie être humain.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9782070368228-L.jpg'),
(3, 'Le Seigneur des Anneaux', 'Dans les terres anciennes où les légendes prennent racine, une ombre grandit. Cette œuvre raconte l’amitié, la tentation et le poids du destin. Chaque pas vers l’inconnu révèle une vérité plus profonde : le pouvoir corrompt, mais l’espoir persiste. Avant même que la quête ne commence, il faut comprendre que le courage des plus petits peut changer le cours du monde.', '2026-03-04', 'https://static.wikia.nocookie.net/cinematheque/images/1/18/Seigneur_des_Anneaux_1.jpg/revision/latest?cb=20200412211150&path-prefix=fr'),
(4, 'L\'Étranger', 'Certains récits ne cherchent pas à expliquer le monde, mais à révéler son absurdité. À travers un regard détaché et lucide, cette histoire explore l’indifférence, la justice et le jugement. Elle nous confronte à une vérité simple et dérangeante : parfois, le monde n’a pas besoin de sens pour exister.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9782070360024-L.jpg'),
(5, 'Dune', 'Sur une planète où le désert règne en maître, la survie dépend d’une ressource aussi rare que précieuse. Mais derrière les luttes politiques et les conflits armés se cache une transformation plus intime : celle d’un jeune homme appelé à devenir plus qu’un simple héritier. Ce roman ouvre la porte à une fresque monumentale où écologie, pouvoir et destinée s’entrelacent.', '2026-03-04', 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg'),
(6, 'Shining', 'Un lieu isolé peut devenir le théâtre des plus grandes tragédies. Lorsque l’hiver enferme les hommes avec leurs peurs, les frontières entre réalité et folie s’estompent. Ce récit plonge dans l’esprit humain et explore les failles invisibles qui, lentement, peuvent conduire au chaos.', '2026-03-04', 'https://m.media-amazon.com/images/I/A1cWZr+V3cL._AC_UF894,1000_QL80_.jpg'),
(7, 'Game of Thrones', 'Le pouvoir attire les ambitions, et les ambitions nourrissent les trahisons. Dans un royaume où les alliances changent comme les saisons, chaque décision peut provoquer la chute d’une dynastie. Ce livre ouvre une saga où l’honneur et la survie s’opposent dans un jeu sans pitié.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780553103540-L.jpg'),
(8, 'A Clash of Kings', 'Le pouvoir attire les ambitions, et les ambitions nourrissent les trahisons. Dans un royaume où les alliances changent comme les saisons, chaque décision peut provoquer la chute d’une dynastie. Ce livre ouvre une saga où l’honneur et la survie s’opposent dans un jeu sans pitié.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780553108033-L.jpg'),
(9, 'The Hobbit', 'Avant même que l’aventure ne commence, il faut un héros improbable. Arraché à son confort, il découvre que le monde est plus vaste et plus dangereux qu’il ne l’imaginait. Dragons, trésors et créatures anciennes ne sont que le décor d’un voyage initiatique où le véritable trésor est la transformation intérieure.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg'),
(10, 'The Lord of the Rings', 'Dans les terres anciennes où les légendes prennent racine, une ombre grandit. Cette œuvre raconte l’amitié, la tentation et le poids du destin. Chaque pas vers l’inconnu révèle une vérité plus profonde : le pouvoir corrompt, mais l’espoir persiste. Avant même que la quête ne commence, il faut comprendre que le courage des plus petits peut changer le cours du monde.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780618640157-L.jpg'),
(11, '1984', 'Il existe des sociétés où la vérité est façonnée par le pouvoir. Là où les mots sont surveillés et les pensées corrigées, l’individu devient fragile. Ce récit n’est pas seulement une fiction : c’est un avertissement. À travers les yeux d’un homme ordinaire, nous pénétrons dans un monde où la liberté s’efface, lentement, méthodiquement, jusqu’à ce qu’il ne reste plus que l’ombre de ce que signifie être humain.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg'),
(12, 'Animal Farm', 'Dans une ferme en apparence paisible, une révolution éclate. Mais lorsque le pouvoir change de mains, les idéaux se transforment. Cette fable révèle avec ironie et lucidité la fragilité des promesses politiques et la facilité avec laquelle l’égalité peut être détournée.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780451526342-L.jpg'),
(13, 'Dune', 'Sur une planète où le désert règne en maître, la survie dépend d’une ressource aussi rare que précieuse. Mais derrière les luttes politiques et les conflits armés se cache une transformation plus intime : celle d’un jeune homme appelé à devenir plus qu’un simple héritier. Ce roman ouvre la porte à une fresque monumentale où écologie, pouvoir et destinée s’entrelacent.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg'),
(14, 'Foundation', 'Les civilisations naissent, prospèrent et s’effondrent. Pourtant, certains esprits cherchent à défier le chaos en anticipant l’avenir. Cette œuvre explore le temps long, la science et l’espoir que l’intelligence puisse guider l’humanité à travers ses heures les plus sombres.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780553293357-L.jpg'),
(15, 'Brave New World', 'Dans un monde où le bonheur est programmé, la liberté devient suspecte. Ce récit interroge le prix du confort et la valeur de l’individualité. Peut-on être véritablement humain si l’on ne connaît ni la souffrance ni le doute ?', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780060850524-L.jpg'),
(16, 'Fahrenheit 451', 'Lorsque les livres deviennent interdits, la mémoire du monde vacille. Cette histoire est une ode à la littérature et à la pensée critique. Elle rappelle que les mots ont un pouvoir immense : celui de construire, mais aussi de résister.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9781451673319-L.jpg'),
(17, 'The Shining', 'Un lieu isolé peut devenir le théâtre des plus grandes tragédies. Lorsque l’hiver enferme les hommes avec leurs peurs, les frontières entre réalité et folie s’estompent. Ce récit plonge dans l’esprit humain et explore les failles invisibles qui, lentement, peuvent conduire au chaos.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780307743657-L.jpg'),
(18, 'Dracula', 'Le vampire légendaire.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780486411095-L.jpg'),
(19, 'Frankenstein', 'Les monstres ne naissent pas toujours dans l’ombre ; parfois, ils sont créés par l’ambition humaine. Ce récit gothique explore la responsabilité du créateur face à son œuvre et la solitude de celui qui ne trouve pas sa place dans le monde.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780486282114-L.jpg'),
(20, 'The Catcher in the Rye', 'À travers la voix d’un narrateur fragile et sincère, ce roman capte le trouble de l’adolescence. Entre innocence et désillusion, il peint le portrait d’une jeunesse en quête de sens dans un monde qu’elle comprend mal.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780316769488-L.jpg'),
(21, 'To Kill a Mockingbird', 'Dans une petite ville marquée par les préjugés, l’innocence d’un enfant révèle les injustices des adultes. Ce récit est à la fois une dénonciation et un hommage : dénonciation du racisme, hommage au courage moral.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg'),
(22, 'Moby-Dick', 'Une obsession peut engloutir une vie entière. Sur l’océan infini, un capitaine poursuit une créature devenue symbole de sa propre folie. Cette œuvre interroge les limites de l’ambition et la nature insaisissable du mal.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780142437247-L.jpg'),
(23, 'The Great Gatsby', 'Entre fêtes éclatantes et solitude profonde, ce roman dissèque le rêve américain. Derrière le faste se cachent des illusions fragiles, prêtes à s’effondrer au moindre souffle de vérité.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg'),
(24, 'Crime and Punishment', 'Peut-on échapper au poids de sa conscience ? Ce roman explore la culpabilité et la rédemption à travers le parcours d’un homme persuadé que ses actes peuvent être justifiés par une idée supérieure.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780486415871-L.jpg'),
(25, 'The Alchemist', 'Chaque vie est une quête. Parfois, le monde entier semble conspirer pour guider celui qui ose écouter son cœur. Cette œuvre est une invitation au voyage intérieur et à la confiance en son propre destin.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg'),
(26, 'The Name of the Wind', 'Les légendes naissent souvent dans l’ombre des tavernes et des récits murmurés. Mais derrière chaque mythe se cache un homme, avec ses forces et ses failles. Cette histoire explore la frontière entre vérité et mémoire.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780756404741-L.jpg'),
(27, 'The Road', 'Dans un monde dévasté, un père et son fils avancent sur une route sans fin. Ce récit minimaliste et poignant explore l’amour filial et l’espoir fragile qui subsiste même lorsque tout semble perdu.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780307387899-L.jpg'),
(28, 'Les Misérables', 'Au cœur de la misère et de l’injustice, des destins se croisent et se transforment. Cette fresque monumentale célèbre la rédemption, la compassion et la force morale face à l’adversité.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780451419439-L.jpg'),
(29, 'The Chronicles of Narnia', 'Au-delà d’une simple porte peut se cacher un monde entier. Cette œuvre invite à retrouver l’émerveillement de l’enfance et rappelle que le courage peut surgir là où on l’attend le moins.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780066238500-L.jpg'),
(30, 'The Girl with the Dragon Tattoo', 'Un mystère ancien, des secrets enfouis et une quête de vérité forment le cœur de ce thriller. Chaque révélation rapproche de la lumière… ou d’un danger plus grand encore.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780307454546-L.jpg'),
(31, 'Gone Girl', 'Un mystère ancien, des secrets enfouis et une quête de vérité forment le cœur de ce thriller. Chaque révélation rapproche de la lumière… ou d’un danger plus grand encore.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780307588371-L.jpg'),
(32, 'The Da Vinci Code', 'Un mystère ancien, des secrets enfouis et une quête de vérité forment le cœur de ce thriller. Chaque révélation rapproche de la lumière… ou d’un danger plus grand encore.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780307474278-L.jpg'),
(33, 'The Hunger Games', 'Dans une société où le spectacle devient instrument de contrôle, une jeune héroïne découvre la brutalité d’un système prêt à tout pour maintenir son pouvoir. Ce récit interroge la résistance et le sacrifice.', '2026-03-04', 'https://covers.openlibrary.org/b/isbn/9780439023528-L.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `contenir`
--

CREATE TABLE IF NOT EXISTS `contenir` (
  `idBook` int NOT NULL,
  `idGenre` int NOT NULL,
  PRIMARY KEY (`idBook`,`idGenre`),
  KEY `idGenre` (`idGenre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `contenir`
--

INSERT INTO `contenir` (`idBook`, `idGenre`) VALUES
(1, 1),
(3, 1),
(7, 1),
(9, 1),
(10, 1),
(26, 1),
(29, 1),
(5, 2),
(11, 2),
(13, 2),
(14, 2),
(15, 2),
(33, 2),
(4, 3),
(12, 3),
(16, 3),
(20, 3),
(21, 3),
(22, 3),
(23, 3),
(24, 3),
(25, 3),
(27, 3),
(28, 3),
(2, 4),
(30, 4),
(31, 4),
(32, 4),
(17, 5),
(18, 5),
(19, 5),
(6, 6),
(7, 6);

-- --------------------------------------------------------

--
-- Structure de la table `etre_ecrit`
--

CREATE TABLE IF NOT EXISTS `etre_ecrit` (
  `idBook` int NOT NULL,
  `idAuthor` int NOT NULL,
  PRIMARY KEY (`idBook`,`idAuthor`),
  KEY `idAuthor` (`idAuthor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `etre_ecrit`
--

INSERT INTO `etre_ecrit` (`idBook`, `idAuthor`) VALUES
(1, 1),
(2, 2),
(11, 2),
(12, 2),
(3, 3),
(7, 3),
(9, 3),
(10, 3),
(4, 4),
(5, 5),
(13, 5),
(6, 6),
(17, 6),
(7, 7),
(8, 7),
(9, 8),
(10, 8),
(11, 9),
(12, 9),
(13, 10),
(14, 11),
(15, 12),
(16, 13),
(17, 14),
(18, 15),
(19, 16),
(20, 17),
(21, 18),
(22, 19),
(23, 20),
(24, 21),
(25, 22),
(26, 23),
(27, 24),
(28, 25),
(29, 26),
(30, 27),
(31, 28),
(32, 29),
(33, 30);

-- --------------------------------------------------------

--
-- Structure de la table `Genre`
--

CREATE TABLE IF NOT EXISTS `Genre` (
  `idGenre` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`idGenre`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Genre`
--

INSERT INTO `Genre` (`idGenre`, `name`) VALUES
(1, 'Fantasy'),
(2, 'Science-Fiction'),
(3, 'Roman classique'),
(4, 'Dystopie'),
(5, 'Philosophie'),
(6, 'Thriller');

-- --------------------------------------------------------

--
-- Structure de la table `StatusBook`
--

CREATE TABLE IF NOT EXISTS `StatusBook` (
  `idStatusBook` int NOT NULL AUTO_INCREMENT,
  `commentaireUtilisateur` varchar(5000) DEFAULT NULL,
  `dateDebutEmprunt` datetime DEFAULT NULL,
  `dateFinEmprunt` datetime DEFAULT NULL,
  `idUser` int NOT NULL,
  `idBook` int NOT NULL,
  PRIMARY KEY (`idStatusBook`),
  KEY `idUser` (`idUser`),
  KEY `idBook` (`idBook`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `StatusBook`
--

INSERT INTO `StatusBook` (`idStatusBook`, `commentaireUtilisateur`, `dateDebutEmprunt`, `dateFinEmprunt`, `idUser`, `idBook`) VALUES
(68, 'Excellent', '2026-03-04 00:00:00', '2026-03-10 09:26:36', 7, 3),
(69, 'Je trouve que la fin est un peu raté', '2026-03-11 09:26:47', '2026-03-25 09:26:47', 7, 5),
(70, NULL, '2026-03-11 10:15:42', '2026-03-25 10:15:42', 9, 2),
(71, 'Trop bien', '2026-03-11 10:16:01', '2026-03-25 10:16:01', 8, 3),
(72, NULL, '2026-03-11 13:32:17', '2026-03-25 13:32:17', 10, 4),
(73, 'hrt', '2026-03-11 14:48:39', '2026-03-25 14:48:39', 7, 9);

-- --------------------------------------------------------

--
-- Structure de la table `User_`
--

CREATE TABLE IF NOT EXISTS `User_` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `mail` varchar(50) DEFAULT NULL,
  `pseudo` varchar(50) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `password` varchar(5000) NOT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `mail` (`mail`),
  UNIQUE KEY `pseudo` (`pseudo`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `User_`
--

INSERT INTO `User_` (`idUser`, `mail`, `pseudo`, `isAdmin`, `password`) VALUES
(1, 'alice@mail.com', 'alice', 0, '$2b$hash1'),
(2, 'bob@mail.com', 'bob', 0, '$2b$hash2'),
(3, 'charlie@mail.com', 'charlie', 0, '$2b$hash3'),
(4, 'david@mail.com', 'david', 0, '$2b$hash4'),
(5, 'eva@mail.com', 'eva', 0, '$2b$hash5'),
(6, 'admin@mail.com', 'admin', 1, '$2b$adminhash'),
(7, 'Julien122@gmail.com', 'juju122', NULL, '$2b$10$Blxv1lmtoWNHdyNqQkzSOuxAL5/9ASwV.onMkzN.HXIBwNJuragsW'),
(8, 'mn@gmail.com', 'mn', NULL, '$2b$10$/PNtuyUWJeef41pqztubmOWQVoFLREWB4ASvbDuaXperUbd4iDi0.'),
(9, 'vendeur@gmail.com', 'vendeur', NULL, '$2b$10$j.gh/GJYJpKDnVy3Slsf.ePQHC1vqH0QPbB2srWGmB9FUerbQ6K76'),
(10, 'test@gmail.com', 'test', 1, '$2b$10$voL2AWl4zMAsw8nsethqhOvG7xFO2xu7DZWw9Whp4A.4c3LYZs75W'),
(11, 'a@gmail.com', 'a', 0, '$2b$10$nbYH8/fUz7euPafrvKWivOZ6X6G/li/hfVQaPqv0vGf9N6EJzleWu');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `contenir`
--
ALTER TABLE `contenir`
  ADD CONSTRAINT `contenir_ibfk_1` FOREIGN KEY (`idBook`) REFERENCES `Book` (`idBook`),
  ADD CONSTRAINT `contenir_ibfk_2` FOREIGN KEY (`idGenre`) REFERENCES `Genre` (`idGenre`);

--
-- Contraintes pour la table `etre_ecrit`
--
ALTER TABLE `etre_ecrit`
  ADD CONSTRAINT `etre_ecrit_ibfk_1` FOREIGN KEY (`idBook`) REFERENCES `Book` (`idBook`),
  ADD CONSTRAINT `etre_ecrit_ibfk_2` FOREIGN KEY (`idAuthor`) REFERENCES `Author` (`idAuthor`);

--
-- Contraintes pour la table `StatusBook`
--
ALTER TABLE `StatusBook`
  ADD CONSTRAINT `StatusBook_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `User_` (`idUser`),
  ADD CONSTRAINT `StatusBook_ibfk_2` FOREIGN KEY (`idBook`) REFERENCES `Book` (`idBook`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
