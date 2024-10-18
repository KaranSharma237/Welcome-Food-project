import express from "express";
import { sendReservation } from "../controller/reservation.js";

const router = express.Router();

// POST endpoint for creating a reservation directly at /api/v1/reservation
router.post("/", sendReservation);

export default router;
