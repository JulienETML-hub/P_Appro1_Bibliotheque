import { Router } from "express";
import { createBook, getBookById, getBooks } from "../controllers/books.controller.js";

const router = Router();

router.get("/", getBooks);
router.get("/create", createBook);
router.get("/:id", getBookById);
export default router;