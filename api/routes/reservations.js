import express from "express";
const router = express.Router();
import {delete_reservation} from "../controllers/reservations.js";


router.post("/", delete_reservation);

export default router;

