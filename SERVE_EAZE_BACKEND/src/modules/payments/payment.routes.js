// src/modules/payments/payment.routes.js
import express from "express";
import {
  createPayment,
  getPayments,
  getPaymentById,
} from "./payment.controller.js";

const router = express.Router();

// Create payment
router.post("/", createPayment);

// Get all payments
router.get("/", getPayments);

// Get single payment
router.get("/:id", getPaymentById);

export default router;
