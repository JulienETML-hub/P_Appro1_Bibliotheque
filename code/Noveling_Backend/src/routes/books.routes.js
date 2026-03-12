import { Router } from "express";
import { createBook, deleteBook, getBookById, getBooks, getBooksByAuthorId, getBooksByUserId} from "../controllers/books.controller.js";
import auth from "../middlewares/auth.js";
import authorize from "../middlewares/authorize.js";
const router = Router();

router.get("/", getBooks);
router.get("/create",authorize(true), createBook);
router.get("/delete/:id",authorize(true), deleteBook);
router.get("/byAuthor/:id", getBooksByAuthorId)
router.get("/byUser/:id", getBooksByUserId);
router.get("/:id", getBookById);
export default router; 