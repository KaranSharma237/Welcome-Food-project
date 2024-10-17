import app from "./app.js";

const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not set

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
