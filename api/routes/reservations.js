import express from "express";
const router = express.Router();
import {delete_reservation, search_reservations} from "../controllers/reservations.js";


router.get("/reservations", search_reservations);
router.post("/reservations", delete_reservations);

export default router;

