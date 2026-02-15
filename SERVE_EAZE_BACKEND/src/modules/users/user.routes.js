// src/modules/users/user.routes.js
import express from "express";
import UserController from "./user.controller.js";
import { protect } from "../../middlewares/auth.middleware.js";
import { authorizeRoles } from "../../middlewares/role.middleware.js";

const router = express.Router();

// ===== Authenticated User Routes =====
router.use(protect);
router.get("/me", UserController.getProfile);
router.patch("/me", UserController.updateProfile);

// ===== Admin Routes =====
router.use(authorizeRoles("admin"));
router.get("/", UserController.getAllUsers);
router.delete("/:id", UserController.deleteUser);

export default router;
