import { Router } from "express";
import {getUsers, loginUser, getUserById, deleteUser, registerUser } from "../controllers/users.controller.js";
import auth from "../middlewares/auth.js";

const router = Router();

router.get("/",auth, getUsers);
//router.get("/create", createUser);
router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/:id",auth, getUserById);
router.delete("/delete/:id",auth, deleteUser);

export default router;