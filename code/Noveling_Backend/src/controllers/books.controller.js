import { models } from "../config/sequelize.js";
import axios from "axios";
import etre_ecrit from "../models/etre_ecrit.js";

export async function getBooks(req, res) {
    const books = await models.Book.findAll(); 
  res.json({ message: "Liste des livres", data: books });
}

export async function getBookById(req, res) {
    const { id } = req.params;
    const book = await models.Book.findByPk(id);    
    if (book) {
        res.json({ message: "Livre trouvé", data: book });
    } else {
        res.status(404).json({ message: "Livre non trouvé"});
    }       
}
export async function createBook(req, res) {
  try {
    const today = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
    const title = req.query.title;
    if (!title) {
      return res.status(400).json({ message: "Le titre est requis" });
    }

    const params = { q: title, maxResults: 1, langRestrict: "fr" };
    if (process.env.GOOGLE_BOOKS_API_KEY) {
      params.key = process.env.GOOGLE_BOOKS_API_KEY;
    }

    const response = await axios.get("https://www.googleapis.com/books/v1/volumes", { params });
    if (!response.data.items || response.data.items.length === 0) {
      return res.status(404).json({ message: "Aucun livre trouvé sur Google Books" });
    }

    const bookData = response.data.items[0].volumeInfo;

    const newBook = await models.Book.create({
      title: bookData.title,
      description: bookData.description,
      urlCover: (bookData.imageLinks && (bookData.imageLinks.thumbnail || bookData.imageLinks.smallThumbnail)) || null,
      addedOnDate: today
    });

    const bookId = newBook.idBook;

    const authors = Array.isArray(bookData.authors) ? bookData.authors : [];
    const createdAuthors = [];

    for (const authorName of authors) {
      const [author] = await models.Author.findOrCreate({
        where: { name: authorName },
        defaults: { name: authorName }
      });
      createdAuthors.push(author);

      const authorId = author.idAuthor;
      await etre_ecrit.create({ idBook: bookId, idAuthor: authorId });
    }
    const genres = Array.isArray(bookData.categories) ? bookData.categories : [];
    for (const genreName of genres) {
      const [genre] = await models.Genre.findOrCreate({
        where: { name: genreName },
        defaults: { name: genreName }
      });
      const genreId = genre.idGenre;
      await models.contenir.create({ idBook: bookId, idGenre: genreId });
    }
    res.status(201).json({ message: "Livre créé", data: newBook, authors: createdAuthors });
  } catch (error) {
    console.error("Erreur lors de la création du livre :", error);
    res.status(500).json({ message: "Erreur lors de la création du livre" });
  }
}

export async function deleteBook(req, res) {
    const { id } = req.params;
    await models.etre_ecrit.destroy({ where: { idBook: id } });
    const deletedCount = await models.Book.destroy({ where: { idBook: id } });    
    if (deletedCount > 0) {
        res.json({ message: "Livre supprimé" });
    } else {
        res.status(404).json({ message: "Livre non trouvé" });
    }
  }