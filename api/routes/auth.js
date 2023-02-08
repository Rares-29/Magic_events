import express from "express";
import { register, login, logout } from "../controllers/auth.js";
const router = express.Router();

router.get("/", register);

export default router;