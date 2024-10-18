import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbconnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from './routes/reservationRoute.js';
import Pusher from 'pusher';

const app = express();
dotenv.config({ path: "./config/config.env" });

// Log the Frontend URL for debugging
console.log('Frontend URL:', process.env.FRONTEND_URL);

// Initialize Pusher
const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_APP_CLUSTER,
    useTLS: true,
});

// CORS configuration
const corsOptions = {
    origin: [
        process.env.FRONTEND_URL,
        'https://welcome-food-project.vercel.app'
    ],
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

// Example of triggering an event (you can modify this as needed)
app.post('/api/v1/reservation/notify', (req, res) => {
    const { message } = req.body;

    // Trigger an event
    pusher.trigger('my-channel', 'my-event', {
        message: message,
    });

    res.status(200).send("Event triggered!");
});

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

