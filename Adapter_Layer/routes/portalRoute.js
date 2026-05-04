import express from "express";
import * as portalController from "../controllers/portalController.js";

const portalRoutes = express.Router();

portalRoutes.get("/students", portalController.listStudents);
portalRoutes.get("/students/:studentId", portalController.getStudent);

export default portalRoutes;
