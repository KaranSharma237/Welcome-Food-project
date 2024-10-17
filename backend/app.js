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
    origin: [process.env.FRONTEND_URL, 'https://welcome-food-project.vercel.app'],
    methods: ["POST"], // Allow only POST method
    credentials: true,
}));

// Custom CORS headers (if needed)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL); // Allow specific origin
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS"); // Allow specific methods
    res.header("Access-Control-Allow-Headers", "Content-Type"); // Allow specific headers
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define the root POST endpoint
app.post('/', (req, res) => {
    res.status(200).json({ message: "Root POST endpoint is working!" });
});

// Optional: Define a root GET endpoint for testing
app.get('/', (req, res) => {
    res.status(200).send("Welcome to the API!");
});

// Define your reservation routes
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

