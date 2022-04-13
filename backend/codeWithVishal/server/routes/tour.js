import express from "express";
const router = express.Router();

import { createTour, getTours } from "../controllers/tour.js";
import auth from "../middleware/auth.js";

router.post("/tour", auth, createTour);
router.post("/", getTours);

export default router;
