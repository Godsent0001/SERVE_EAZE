// src/modules/notifications/notification.routes.js
import express from "express";
import NotificationController from "./notification.controller.js";
import { protect } from "../../middlewares/auth.middleware.js";
import { authorizeRoles } from "../../middlewares/role.middleware.js";

const router = express.Router();

// All routes require authentication
router.use(protect);

// ===== User Routes =====
router.get("/me", NotificationController.getUserNotifications);
router.patch("/me/:id/read", NotificationController.markAsRead);
router.patch("/me/read-all", NotificationController.markAllAsRead);

// ===== Admin Route (optional) =====
router.post("/", authorizeRoles("admin"), NotificationController.createNotification);

export default router;
