import { Router } from "express";
import { createBook, deleteBook, getBookById, getBooks, getBooksByAuthorId } from "../controllers/books.controller.js";
import auth from "../middlewares/auth.js";

const router = Router();

router.get("/", getBooks);
router.get("/create", createBook);
router.get("/delete/:id", deleteBook);
router.get("/byAuthor/:id", getBooksByAuthorId)
router.get("/:id", getBookById);
export default router;