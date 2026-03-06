import { Router } from "express";
import { getAuthorById, getAuthors, getAuthorsByBookId } from "../controllers/authors.controller.js";
//import auth from "../middlewares/auth.js";

const router = Router();


router.get("/", getAuthors);
router.get("/byBook/:id", getAuthorsByBookId);
router.get("/:id", getAuthorById);

export default router;