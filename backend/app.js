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

// CORS configuration (only allowing POST requests)
app.use(cors({
    origin: [process.env.FRONTEND_URL, 'https://welcome-food-project.vercel.app'],
    methods: ["POST"], // Only allow POST method
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root endpoint for a simple response
app.post('/', (req, res) => {
    res.send('API is live! Use the /api/v1/reservation/send endpoint to make reservations.');
});

// Define your routes
app.use('/api/v1/reservation', reservationRouter);

// Connect to the database
dbConnection();

// Error handling middleware
app.use(errorMiddleware);

// Optional: Log requests for debugging
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

export default app;
