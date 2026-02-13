import { models } from "../config/sequelize.js";
//import axios from "axios";

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
