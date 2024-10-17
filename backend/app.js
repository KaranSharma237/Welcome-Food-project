
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbconnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from './routes/reservationRoute.js';

const app = express();
dotenv.config({ path: "./config/config.env" });

// Log the Frontend URL for debugging
console.log('Frontend URL:', process.env.FRONTEND_URL);

// CORS configuration
app.use(cors({
    origin: [process.env.FRONTEND_URL, 'https://welcome-food-project.vercel.app/'], // Allow both frontend and local requests
    methods: ["POST"], // Allow necessary methods
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define your routes
app.use('/api/v1/reservation', reservationRouter);

// Connect to the database
dbConnection();

// Error handling middleware
app.use(errorMiddleware);

export default app;
