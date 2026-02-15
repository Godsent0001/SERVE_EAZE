// src/middlewares/rateLimit.middleware.js
import rateLimit from "express-rate-limit";

/**
 * Limit requests to prevent abuse / DDoS
 */
export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too many requests from this IP, please try again later",
});
