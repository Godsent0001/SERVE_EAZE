// src/modules/services/service.routes.js
import express from "express";
import ServiceController from "./service.controller.js";
import { protect } from "../../middlewares/auth.middleware.js";
import { authorizeRoles } from "../../middlewares/role.middleware.js";

const router = express.Router();

// ===== Public Routes =====
router.get("/", ServiceController.listServices);
router.get("/:id", ServiceController.getService);

// ===== Provider Routes =====
router.use(protect);
router.use(authorizeRoles("provider"));

router.post("/", ServiceController.createService);
router.patch("/:id", ServiceController.updateService);
router.delete("/:id", ServiceController.deleteService);

export default router;
