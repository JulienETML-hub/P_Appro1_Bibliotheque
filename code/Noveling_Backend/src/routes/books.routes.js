import { Router } from "express";
import { getBookById, getBooks } from "../controllers/books.controller.js";

const router = Router();

router.get("/", getBooks);
router.get("/:id", getBookById);
export default router;