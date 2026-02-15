// src/routes/index.js
import express from "express";

// Import module routes
import authRoutes from "../modules/auth/auth.routes.js";
import userRoutes from "../modules/users/user.routes.js";
import providerRoutes from "../modules/providers/provider.routes.js";
import serviceRoutes from "../modules/services/service.routes.js";
import bookingRoutes from "../modules/bookings/booking.routes.js";
import reviewRoutes from "../modules/reviews/review.routes.js";
import notificationRoutes from "../modules/notifications/notification.routes.js";
import campusRoutes from "../modules/campus/campus.routes.js";
import adminRoutes from "../modules/admin/admin.routes.js";
import paymentRoutes from "../modules/payments/payment.routes.js";

const router = express.Router();

// Routes
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/providers", providerRoutes);
router.use("/services", serviceRoutes);
router.use("/bookings", bookingRoutes);
router.use("/reviews", reviewRoutes);
router.use("/notifications", notificationRoutes);
router.use("/campus", campusRoutes);
router.use("/admin", adminRoutes);
router.use("/payments", paymentRoutes);

export default router;
