import express from "express";
import cors from "cors";
import "dotenv/config.js";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: process.env.ORIGIN || true,
    })
);

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

app.use("/api", studentRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "No such endpoint exists",
    });
});

const PORT = Number(process.env.PORT) || 5100;
app.listen(PORT, () => {
    console.log(`Student Portal running on port ${PORT}`);
});
