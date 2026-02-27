import { Router } from "express";
import {getStatusBooks, getStatusBooksById, createStatusBook modifyStatusBook} from "../controllers/statusBooks.controller.js";
import auth  from "../middlewares/auth.js";

const router = Router();

router.get("/", auth, getStatusBooks);
router.get("/create", createStatusBook);
router.get("/modify/:id", modifyStatusBook);
router.get("/:id", getStatusBooksById);
export default router;