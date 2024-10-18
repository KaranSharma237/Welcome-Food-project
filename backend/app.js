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
const corsOptions = {
    origin: '*', // Temporarily allow all origins for testing
    methods: ["POST", "GET", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
};

// Use CORS middleware before routes
app.use(cors(corsOptions));

// Enable pre-flight across-the-board
app.options('*', cors(corsOptions));

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

// Apply CORS specifically to the reservation routes
app.use('/api/v1/reservation', cors(corsOptions), reservationRouter);

// Connect to the database
dbConnection();

// Error handling middleware
app.use(errorMiddleware);

// Optional: Log requests for debugging
app.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url} from ${req.headers.origin}`);
    next();
});

export default app;


