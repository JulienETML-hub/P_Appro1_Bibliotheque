import { Router } from "express";
import { createBook, deleteBook, getBookById, getBooks } from "../controllers/books.controller.js";
import auth from "../middlewares/auth.js";

const router = Router();

router.get("/", auth, getBooks);
router.get("/create", createBook);
router.get("/delete/:id", deleteBook);
router.get("/:id", getBookById);
export default router;