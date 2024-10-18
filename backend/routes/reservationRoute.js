import express from "express";
import { sendReservation } from "../controller/reservation.js";

const router = express.Router();

// POST endpoint for creating a reservation
router.post("/send", async (req, res) => {
    try {
        const reservationData = req.body; // Access the data sent in the request
        const result = await sendReservation(reservationData); // Call the controller function
        res.status(201).json({ message: 'Reservation created', data: result });
    } catch (error) {
        console.error('Error creating reservation:', error);
        res.status(500).json({ message: 'Error creating reservation', error: error.message });
    }
});

export default router;
