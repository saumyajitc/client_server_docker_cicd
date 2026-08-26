import express from "express";
import cors from "cors";
import { STATUS_CODES } from "http";

const app = express();

app.use(express.json())
app.use(cors(
    {
        origin: [
            'http://localhost:5173',
            'http://localhost:5174',
            'http://localhost:3000',
            // add production url
        ],
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    }
))

//API route
app.get('/api/message', (req, res) => {
    res.status(200).json({
        message: "Hello from the baseApp backend"
    })
})

// Define port
const PORT = 4000
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})