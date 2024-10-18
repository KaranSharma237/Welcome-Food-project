
import express from "express";
import { sendReservation } from "../controller/reservation.js";

const router = express.Router();

// POST endpoint for creating a reservation at /send
router.post("/send", sendReservation); // Now it handles POST requests to /api/v1/reservation/send

export default router;
