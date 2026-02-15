// src/modules/reviews/review.routes.js
import express from "express";
import ReviewController from "./review.controller.js";
import { protect } from "../../middlewares/auth.middleware.js";
import { authorizeRoles } from "../../middlewares/role.middleware.js";

const router = express.Router();

// All routes require authentication
router.use(protect);

// ===== Seeker routes =====
router.post("/", authorizeRoles("student"), ReviewController.createReview);
router.get("/me", authorizeRoles("student"), ReviewController.getSeekerReviews);

// ===== Provider routes =====
router.get("/provider/:providerId", authorizeRoles("provider", "student"), ReviewController.getProviderReviews);

export default router;
