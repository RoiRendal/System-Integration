import express from "express";
import "dotenv/config.js";
import authRoute from "./routes/authRoute.js";
import portalRoute from "./routes/portalRoute.js";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.path}`);
    next();
});

app.use("/auth", authRoute);
app.use("/portal", portalRoute);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "No such endpoint exists",
    });
});

const PORT = Number(process.env.PORT) || 4000;
app.listen(PORT, () => {
    console.log(`Adapter Layer running on port ${PORT}`);
});

