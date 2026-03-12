import { Router } from "express";
import {getUsers, loginUser, getUserById, deleteUser, registerUser, getMe, logout } from "../controllers/users.controller.js";
import auth from "../middlewares/auth.js";
import authorize from "../middlewares/authorize.js";
const router = Router();

router.get("/", auth, getUsers);
router.get("/me", auth, getMe);
//router.get("/create", createUser);
router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/:id",auth, getUserById);
router.delete("/delete/:id",auth, authorize(true), deleteUser);
router.post("/logout", logout);
export default router; 