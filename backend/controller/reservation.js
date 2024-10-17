import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, date, time } = req.body;

    // Check for missing fields
    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill out the entire reservation form!", 400));
    }

    try {
        // Convert date string to Date object if necessary
        const reservationData = {
            firstName,
            lastName,
            email,
            phone,
            date: new Date(date), // Ensure the date is in Date format
            time,
        };

        await Reservation.create(reservationData);
        
        res.status(200).json({
            success: true,
            message: "Reservation sent successfully!",
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validatorErrors = Object.values(error.errors).map(err => err.message);
            return next(new ErrorHandler(validatorErrors.join(', '), 400));
        }
        return next(error);
    }
};
