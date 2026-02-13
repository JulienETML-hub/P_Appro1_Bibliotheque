// Importation des modules
import { Sequelize, DataTypes } from "sequelize";
//import bcrypt from "bcrypt";
import initModels from "../models/init-models.js";




const sequelize = new Sequelize(
  "NovelingDB", // Nom de la DB qui doit exister
  "root", // Nom de l'utilisateur
  "root", // Mot de passe de l'utilisateur
  {
    host: "localhost",
    port: "6033",// pour les conteneurs docker MySQL
    dialect: "mysql",
    logging: false,
  }
);

export const models = initModels(sequelize);



export default sequelize;