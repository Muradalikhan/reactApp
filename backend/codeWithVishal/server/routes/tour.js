import express from "express";
const router = express.Router();

import { createTour, getTours } from "../controllers/tour.js";

router.post("/", createTour);
router.post("/", getTours);

export default router;
