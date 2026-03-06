import { Router } from "express";
import {getStatusBooks, getStatusBooksById, createStatusBook, modifyStatusBook, getFiveMostPopularBooks, getStatusBookByBookId,getPopularityBooksByBookId} from "../controllers/statusBooks.controller.js";
import auth  from "../middlewares/auth.js";

const router = Router();

router.get("/", auth, getStatusBooks);
router.get("/create", createStatusBook);
router.get("/MostPopular", getFiveMostPopularBooks);
router.get("/statusBookByBookId/:id", getStatusBookByBookId);
router.get("/popularity/:id", getPopularityBooksByBookId);
router.get("/modify/:id", modifyStatusBook);
router.get("/:id", getStatusBooksById);
export default router;