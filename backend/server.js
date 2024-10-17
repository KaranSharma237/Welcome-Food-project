import app from "./app.js";
const cors = require('cors');
app.use(cors());
app.listen(process.env.PORT, () => {
    console.log(`Server Running On Port ${process.env.port}`);
})