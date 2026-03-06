import { Router } from "express";
import { getGenreById, getGenres, getGenresByBookId } from "../controllers/genres.controller.js";
// import auth from "../middlewares/auth.js";

const router = Router();

router.get("/", getGenres);

router.get("/byBook/:id", getGenresByBookId);

router.get("/:id", getGenreById);

export default router;
