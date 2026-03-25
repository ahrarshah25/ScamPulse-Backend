import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import colors from "colors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import sendMailsRoutes from "./routes/sendMailsRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors({
    origin: ['http://localhost:5173', 'https://scampulse.vercel.app', 'http://localhost:4173', 'http://auth.localhost:5173', 'http://dashboard.localhost:5173'],
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/sendMail", sendMailsRoutes);
app.use("/api/v1/notifications", notificationRoutes)

app.get('/', (req, res) => {
    res.send("<h1>Welcome To ScamPulse</h1>");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`.bgGreen.white);
});

// export default app;