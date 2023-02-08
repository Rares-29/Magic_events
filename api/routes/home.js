import express from "express";
const router = express.Router();
import {home, get_reservation} from "../controllers/home.js";


router.get("", home);
router.post("", get_reservation);

export default router;

