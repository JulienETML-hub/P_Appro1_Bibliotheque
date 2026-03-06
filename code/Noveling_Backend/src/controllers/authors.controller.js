import { models } from "../config/sequelize.js";


export async function getAuthors(req, res) {
    const authors = await models.Author.findAll(); 
  res.json({ message: "Liste des auteurs", data: authors });
}
export async function getAuthorById(req, res) {
    const { id } = req.params;
    const author = await models.Author.findByPk(id);
    if (author) {
        res.json({ message: "Auteur trouvé", data: author });
    } else {
        res.status(404).json({ message: "Auteur non trouvé"});
    }   
}
export async function getAuthorsByBookId(req, res) {

    const { id } = req.params;
    const author = [];
    const authorsid = await models.etre_ecrit.findAll({
        where: { idBook: id }
    }); 
    //res.json({ message: "Liste des auteurs du livre", data: authorsid[0].idAuthor })
    
    for( let i = 0; i < authorsid.length; i++)
        {
           author[i]  = await models.Author.findByPk(authorsid[i].idAuthor);
        };
    res.json({ message: "Liste des auteurs du livre", data: author });
}