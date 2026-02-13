import { models } from "../config/sequelize.js";
import axios from "axios";
import etre_ecrit from "../models/etre_ecrit.js";

/*function getBooksFromGoogle() {
  return axios.get("https://www.googleapis.com/books/v1/volumes", {
    params: { q: "Harry+potter" },
  });
}
*/

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
    const title = req.query.title || req.body.title;
    axios.get("https://www.googleapis.com/books/v1/volumes", {
    params: { q: title, maxResults: 1, langRestrict: "fr" },
  }).then(response => {
    const bookData = response.data.items[0].volumeInfo;

    const newBook = models.Book.create({ title: bookData.title, description: bookData.description, urlCover : bookData.imageLinks.thumbnail});
    for (let i = 0; i < bookData.authors.length; i++) {
    models.Author.findOrCreate({ where: { name: bookData.authors[i]}});
    };

    // POUR MON MOI DU FUTUR : A REVOIR, IL FAUT D'ABORD CREER LE LIVRE, PUIS RECUPERER SON ID AVEC UN FIND, PUIS CREER L'ETRE_ECRIT AVEC LES ID DU LIVRE ET DE L'AUTEUR
    // LA LIGNE CI DESSOUS NE MARCHE PAS DUTOUT A REFAIRE, CELLE DE DESSUS JE CROIS QUE SI
    etre_ecrit.create({ BookId : models.Book.findOne({ title: bookData.title, description: bookData.description, urlCover : bookData.imageLinks.thumbnail}), AuthorId :1});

    res.status(201).json({ message: "Livre créé", data: newBook });}
  ).catch(error => {
    console.error("Erreur lors de la récupération des données du livre :", error);
    res.status(500).json({ message: "Erreur lors de la création du livre" });
  });
}
