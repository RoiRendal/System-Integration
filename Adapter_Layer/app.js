import express from "express";
import 'dotenv/config.js';
import authRoute from "./routes/authRoute.js";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/auth', authRoute);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'No such endpoint exists'
    })
});

