// src/modules/campus/campus.routes.js
import express from "express";
import CampusController from "./campus.controller.js";
import { protect } from "../../middlewares/auth.middleware.js";
import { authorizeRoles } from "../../middlewares/role.middleware.js";

const router = express.Router();

// ===== Public Routes =====
router.get("/", CampusController.getAllCampuses);
router.get("/nearby", CampusController.findNearbyProviders);
router.get("/:id", CampusController.getCampusById);

// ===== Admin Routes =====
router.use(protect);
router.use(authorizeRoles("admin"));

router.post("/", CampusController.createCampus);
router.patch("/:id", CampusController.updateCampus);
router.delete("/:id", CampusController.deleteCampus);

export default router;
