import e from "express";
import sequelize, { models } from "../config/sequelize.js";
import axios from "axios";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Book from "../models/Book.js";


export async function createStatusBook(req, res) {
    try {
        const { idUser, idBook, dateDebutEmprunt, dateFinEmprunt } = req.body;
        const StatusBook = await models.StatusBook.create({ idUser, idBook, dateDebutEmprunt, dateFinEmprunt });
        console.log("StatusBook créé :", StatusBook.toJSON());
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
export async function getStatusBooksById(req, res) {
    try {
        const { id } = req.params;
        const statusBook = await models.StatusBook.findByPk(id)
        res.json({ message: "Status book", data: statusBook })
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la requête du book status" })

    }

}
export async function modifyStatusBook(req, res) {
    try {
        const { id } = req.params;
        const { commentaireUtilisateur, dateFinEmprunt } = req.body;
        const statusBook = await models.StatusBook.findByPk(id);
        if (statusBook) {
            statusBook.commentaireUtilisateur = commentaireUtilisateur;
            if (dateFinEmprunt != null) {
                statusBook.dateFinEmprunt = dateFinEmprunt;
            }
            await statusBook.save();
            res.json({ message: "StatusBook modifié", data: statusBook });
        } else {
            res.status(404).json({ message: "StatusBook non trouvé" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la modification du StatusBook" });
    }

}

export async function getFiveMostPopularBooks(req, res) {
    try {
        const statusBooks = await sequelize.query(`
        SELECT 
            t.*,
            c.popularity
        FROM Book t
        JOIN (
            SELECT idBook, COUNT(*) AS popularity
            FROM StatusBook
            GROUP BY idBook
            ORDER BY popularity DESC
            LIMIT 5
        ) c ON t.idBook = c.idBook
        ORDER BY c.popularity DESC;
        `)
        res.json({ message: "5 livres les plus populaires", data: statusBooks[0] });
    }
    catch {
        res.json({ message: "erreur rencontré" });

    }
}

export async function getPopularityBooksByBookId(req, res) {
    const { id } = req.params;
    //await models.StatusBook.findAndCountAll({where : {idBook : idBook}})

    try {
        const statusBooks = await models.StatusBook.count({ where: { idBook: id } });
        res.json({ message: "Popularity du livre ", data: statusBooks });
    }
    catch {
        res.json({ message: "erreur rencontré" });
    }
}
export async function getStatusBookByBookId(req, res) {
    const { id } = req.params;
    try {
        const statusBook = await models.StatusBook.findAll({where: { idBook: id }});
        res.json({ message: "Status du livre", data: statusBook });
    }
    catch {
        res.json({ message: "Erreur s'est produite" });
    }
}
export async function getStatusBookByUserId(req, res) {
    const { id } = req.params;
    try {   
        const statusBook = await models.StatusBook.findAll({where: { idUser: id }});
        res.json({ message: "Status du livre", data: statusBook });
    }
    catch {
        res.json({ message: "Erreur s'est produite" });
    }       
}

