// src/modules/providers/provider.routes.js
import express from "express";
import ProviderController from "./provider.controller.js";
import { protect } from "../../middlewares/auth.middleware.js";
import { authorizeRoles } from "../../middlewares/role.middleware.js";

const router = express.Router();

// All routes require authentication
router.use(protect);

// ===== Provider Routes =====
router.post("/", ProviderController.createProvider); // create profile
router.get("/me", ProviderController.getProvider); // get own profile
router.patch("/me", ProviderController.updateProvider); // update profile
router.get("/", ProviderController.listProviders); // list providers (publicly accessible to authenticated users)

// ===== Admin Routes =====
router.patch("/:id/approve", authorizeRoles("admin"), ProviderController.approveProvider);

export default router;
