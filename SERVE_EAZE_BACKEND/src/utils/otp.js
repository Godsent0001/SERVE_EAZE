// src/utils/otp.js

import crypto from "crypto";
import { OTP_EXPIRY_MINUTES } from "./constants.js";

/**
 * Generate a numeric OTP of given length (default 6)
 */
export const generateOTP = (length = 6) => {
  const otp = crypto.randomInt(0, 10 ** length).toString().padStart(length, "0");
  return otp;
};

/**
 * Return expiry timestamp for OTP
 */
export const getOtpExpiry = () => {
  return new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);
};
