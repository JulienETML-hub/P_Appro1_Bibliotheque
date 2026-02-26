import e from "express";
import { models } from "../config/sequelize.js";
import axios from "axios";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; 

export async function getUsers(req, res) {
    const users = await models.User_.findAll(); 
  res.json({ message: "Liste des utilisateurs", data: users });
}   

export async function getUserById(req, res) {
    const { id } = req.params;
    const user = await models.User_.findByPk(id);   
    if (user) {
        res.json({ message: "Utilisateur trouvé", data: user });
    } else {
        res.status(404).json({ message: "Utilisateur non trouvé"});
    }       
}   


export async function deleteUser(req, res) {
    try {
        const { id } = req.params; 
        const deleted = await models.User_.destroy({ where: { idUser: id } });
        if (deleted) {
            res.json({ message: "Utilisateur supprimé" });
        } else {
            res.status(404).json({ message: "Utilisateur non trouvé" });
        }   
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la suppression de l'utilisateur" });
    }       
}

/*export async function loginUser(req, res) {
    try {
        const { email } = req.query.email;
        const { password } = req.query.password;
        const { pseudo } = req.query.pseudo;
        if (!email ||  !pseudo && !password ) {
            return res.status(400).json({ message: "L'email, le pseudo et le mot de passe sont requis" });
        } else  
        {         const user = await models.User_.findOne({ where: { email } });
            if (user) {
                if (user.password === password) {
                    res.json({ message: "Connexion réussie", data: user });
                } else {
                    res.status(401).json({ message: "Mot de passe incorrect" });
                }
    }   */


export async function registerUser(req, res) {
    try {
        const { pseudo, email, password } = req.body;  
        if (!pseudo || !email || !password) {
            return res.status(400).json({ message: "Le pseudo, l'email et le mot de passe sont requis" });
        }   else {
            const existingUser = await models.User_.findOne({ where: { mail : email } });
            if (existingUser) {
                return res.status(409).json({ message: "Un utilisateur avec cet email existe déjà" });
            } else {
                const hashedPassword = await bcrypt.hash(password, 10);
                const newUser = await models.User_.create({ pseudo : pseudo, mail : email, password: hashedPassword });
                res.status(201).json({ message: "Utilisateur enregistré", data: newUser });
            }   
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de l'enregistrement de l'utilisateur" });
    }
}

export async function loginUser(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "L'email et le mot de passe sont requis" });
        }   else {      
            const user = await models.User_.findOne({ where: { mail : email } });
            if (user) {
                const passwordMatch = await bcrypt.compare(password, user.password);    
                if (passwordMatch) {
                    const token = jwt.sign({ idUser: user.idUser, pseudo: user.pseudo }, process.env.JWT_SECRET, { expiresIn: '1h' });
                    res.cookie('access_token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'preproduction' });
                    res.json({ message: "Connexion réussie", data: { idUser: user.idUser, pseudo: user.pseudo, token } });
                } else {
                    res.status(401).json({ message: "Mot de passe incorrect" });
                }
            } else {
                res.status(404).json({ message: "Utilisateur non trouvé" });
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la connexion de l'utilisateur" });
    }   
}