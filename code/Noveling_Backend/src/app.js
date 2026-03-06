import express from "express";
import cors from "cors";
import "dotenv/config";
import booksRoutes from "./routes/books.routes.js";
import usersRoutes from "./routes/users.routes.js";
import authorsRoutes from "./routes/authors.routes.js";
import auth from "./middlewares/auth.js";
import cookieParser from "cookie-parser";
import statusRoutes from "./routes/statusBooks.routes.js";
import genresRoutes from "./routes/genres.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;


// Middlewares globaux
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // PAS '*'
    credentials: true,               // autorise cookies / credentials
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json()); // pour lire le JSON du body

// Routes
app.use("/api/books",auth, booksRoutes);
app.use("/api/users", usersRoutes); 
app.use("/api/statusBooks",auth,statusRoutes);
app.use("/api/authors", auth,authorsRoutes); 
app.use("/api/genres",auth, genresRoutes);
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Handler d'erreurs (si tu fais next(err))
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
export default app;