import e from "express";
import { models } from "../config/sequelize.js";
import axios from "axios";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; 


export async function createStatusBook(req, res) { 
    try {
        const { idUser, idBook, dateDebutEmprunt, dateFinEmprunt } = req.body;    
        StatusBook = await models.StatusBook.create({ idUser, idBook, dateDebutEmprunt, dateFinEmprunt });
        res.json({ message: "StatusBook créé", data: StatusBook });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la création du StatusBook" });
    }
}
export async function getStatusBooks(req, res) {
    const statusBooks = await models.StatusBook.findAll(); 
  res.json({ message: "Liste des StatusBooks", data: statusBooks });
}
export async function getStatusBooksById(req,res) {
    try{
    const {id} = req.params;
    const statusBook = await models.StatusBook.findByPk(id)
    res.json({message: "Status book", })
} catch (error){
    res.status(500).json({message: "Erreur lors de la requête du book status"})

}

}
export async function modifyStatusBook(req, res) {
    try {
        const { id } = req.params;
        const { commentaireUtilisateur, dateFinEmprunt } = req.body;
        const statusBook = await models.StatusBook.findByPk(id);
        if (statusBook) {
            statusBook.commentaireUtilisateur = commentaireUtilisateur;
            if (dateFinEmprunt != null){
                statusBook.dateFinEmprunt = dateFinEmprunt;
            }
            await statusBook.save();
            res.json({ message: "StatusBook modifié", data: statusBook });
        }   else {
            res.status(404).json({ message: "StatusBook non trouvé" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la modification du StatusBook" });
    }

}