import { Router } from "express";
import {getUsers, loginUser, getUserById, deleteUser, registerUser } from "../controllers/users.controller.js";

const router = Router();

router.get("/", getUsers);
//router.get("/create", createUser);
router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/:id", getUserById);
router.delete("/delete/:id", deleteUser);

export default router;