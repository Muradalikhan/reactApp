import express from "express";
const router = express.Router();

import {
  createTour,
  getTour,
  getTours,
  getToursByUser,
} from "../controllers/tour.js";
import auth from "../middleware/auth.js";

router.post("/tour", auth, createTour);
router.get("/tour", getTours);
router.get("/tour/:id", getTour);
router.get("/tour/userTours/:id", auth, getToursByUser);

export default router;
