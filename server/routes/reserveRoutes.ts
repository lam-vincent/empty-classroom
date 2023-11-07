import express from "express";
import {
  createReservation,
  getReservationByUser,
  updateReservation,
  deleteReservation,
} from "../controllers/reserveController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

// Create a reservation
router.post("/reserve", authMiddleware, createReservation);

// Get all reservations for a user
router.get("/reserve/:user_id", authMiddleware, getReservationByUser);

// Update a reservation by room and user
router.put("/reserve/:id_reserve", authMiddleware, updateReservation);

// Delete a reservation by room and user
router.delete("/reserve/:id_reserve", authMiddleware, deleteReservation);

export default router;
