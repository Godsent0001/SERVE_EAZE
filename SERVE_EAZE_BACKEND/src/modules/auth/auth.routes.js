// src/modules/auth/auth.routes.js
import express from "express";
import AuthController from "./auth.controller.js";

const router = express.Router();

// Public routes
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

// Verification routes
router.post("/verify-email", AuthController.verifyEmail);
router.post("/verify-phone", AuthController.verifyPhone);

export default router;
