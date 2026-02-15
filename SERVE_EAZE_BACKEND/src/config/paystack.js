// src/config/paystack.js
import axios from "axios";
import { env } from "./env.js";

const PAYSTACK_SECRET = env.PAYSTACK_SECRET_KEY;

const paystackAPI = axios.create({
  baseURL: "https://api.paystack.co",
  headers: {
    Authorization: `Bearer ${PAYSTACK_SECRET}`,
    "Content-Type": "application/json",
  },
});

/**
 * Initialize payment
 * @param {number} amount - in kobo (Naira * 100)
 * @param {string} email
 * @param {string} reference
 */
export const initializePayment = async (amount, email, reference) => {
  try {
    const response = await paystackAPI.post("/transaction/initialize", {
      amount,
      email,
      reference,
    });
    return response.data; // contains authorization_url
  } catch (error) {
    console.error("❌ Paystack Init Error:", error.response?.data || error);
    throw new Error("Payment initialization failed");
  }
};

/**
 * Verify payment
 * @param {string} reference
 */
export const verifyPayment = async (reference) => {
  try {
    const response = await paystackAPI.get(`/transaction/verify/${reference}`);
    return response.data;
  } catch (error) {
    console.error("❌ Paystack Verify Error:", error.response?.data || error);
    throw new Error("Payment verification failed");
  }
};

/**
 * Refund payment
 * @param {string} transaction
 */
export const refundPayment = async (transaction) => {
  try {
    const response = await paystackAPI.post("/refund", {
      transaction,
    });
    return response.data;
  } catch (error) {
    console.error("❌ Paystack Refund Error:", error.response?.data || error);
    throw new Error("Refund failed");
  }
};

export default paystackAPI;
