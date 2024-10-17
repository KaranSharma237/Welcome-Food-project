import express from "express";
import { sendReservation } from "../controller/reservation.js";

const router = express.Router();

// POST endpoint for creating a reservation
router.post("/", sendReservation); // Changed to a more general route

export default router;
