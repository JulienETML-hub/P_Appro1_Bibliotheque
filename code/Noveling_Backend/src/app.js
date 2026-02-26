import express from "express";
import cors from "cors";

import booksRoutes from "./routes/books.routes.js";
import usersRoutes from "./routes/users.routes.js";
import {auth} from "./middlewares/auth.js";
const app = express();

// Middlewares globaux
app.use(cors());
app.use(express.json()); // pour lire le JSON du body

// Routes
app.use("/api/books", booksRoutes);
app.use("/api/users", usersRoutes); 
// 404
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Handler d'erreurs (si tu fais next(err))
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

export default app;