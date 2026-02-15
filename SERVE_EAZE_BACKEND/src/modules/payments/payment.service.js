// src/modules/payments/payment.service.js
import Payment from "./payment.model.js";

// Fake DB for now (later MongoDB/Postgres)
const payments = [];

// Create payment
export const createPayment = async (data) => {
  const newPayment = {
    id: Date.now().toString(),
    ...data,
    status: "pending",
    createdAt: new Date(),
  };

  payments.push(newPayment);
  return newPayment;
};

// Get all payments
export const getPayments = async () => {
  return payments;
};

// Get payment by ID
export const getPaymentById = async (id) => {
  return payments.find((p) => p.id === id);
};
