// src/modules/admin/admin.routes.js
import express from "express";
import AdminController from "./admin.controller.js";
import { protect } from "../../middlewares/auth.middleware.js";
import { authorizeRoles } from "../../middlewares/role.middleware.js";

const router = express.Router();

// All routes protected and admin-only
router.use(protect);
router.use(authorizeRoles("admin"));

// ===== User Management =====
router.get("/users", AdminController.getUsers);
router.patch("/users/block/:id", AdminController.blockUser);
router.patch("/users/unblock/:id", AdminController.unblockUser);
router.patch("/users/verify/:id", AdminController.verifyStudent);

// ===== Service Management =====
router.get("/services", AdminController.getServices);
router.patch("/services/approve/:id", AdminController.approveService);
router.delete("/services/:id", AdminController.removeService);

// ===== Transactions / Reports =====
router.get("/payments", AdminController.getPayments);
router.get("/reports", AdminController.getReports);

export default router;
