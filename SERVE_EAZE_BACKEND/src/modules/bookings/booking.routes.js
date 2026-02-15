// src/modules/bookings/booking.routes.js
import express from "express";
import BookingController from "./booking.controller.js";
import { protect } from "../../middlewares/auth.middleware.js";
import { authorizeRoles } from "../../middlewares/role.middleware.js";

const router = express.Router();

// All booking routes require authentication
router.use(protect);

// ===== Seeker Routes =====
router.post("/", authorizeRoles("student"), BookingController.createBooking);
router.get("/seeker", authorizeRoles("student"), BookingController.getSeekerBookings);

// ===== Provider Routes =====
router.get("/provider", authorizeRoles("provider"), BookingController.getProviderBookings);
router.patch("/:id/status", authorizeRoles("provider"), BookingController.updateBookingStatus);
router.patch("/:id/payment", authorizeRoles("student", "provider"), BookingController.markPayment);

export default router;
