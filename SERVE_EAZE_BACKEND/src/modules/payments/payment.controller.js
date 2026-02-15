// src/modules/payments/payment.controller.js
import * as paymentService from "./payment.service.js";

// Create payment
export const createPayment = async (req, res, next) => {
  try {
    const payment = await paymentService.createPayment(req.body);
    res.status(201).json({ success: true, data: payment });
  } catch (error) {
    next(error);
  }
};

// Get all payments
export const getPayments = async (req, res, next) => {
  try {
    const payments = await paymentService.getPayments();
    res.json({ success: true, data: payments });
  } catch (error) {
    next(error);
  }
};

// Get payment by ID
export const getPaymentById = async (req, res, next) => {
  try {
    const payment = await paymentService.getPaymentById(req.params.id);
    res.json({ success: true, data: payment });
  } catch (error) {
    next(error);
  }
};
