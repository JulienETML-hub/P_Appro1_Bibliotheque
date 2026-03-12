import { Router } from "express";
import {getStatusBooks, getStatusBooksById, createStatusBook, modifyStatusBook, getFiveMostPopularBooks, getStatusBookByUserId, getStatusBookByBookId,getPopularityBooksByBookId} from "../controllers/statusBooks.controller.js";
import auth  from "../middlewares/auth.js";

const router = Router();

router.get("/", getStatusBooks);
router.post("/create", createStatusBook);
router.get("/MostPopular", getFiveMostPopularBooks);
router.get("/ByBookId/:id", getStatusBookByBookId);
router.get("/ByUserId/:id", getStatusBookByUserId);
router.get("/popularity/:id", getPopularityBooksByBookId);
router.put("/modify/:id", modifyStatusBook);
router.get("/:id", getStatusBooksById);
export default router;