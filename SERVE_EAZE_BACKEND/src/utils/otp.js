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

// In-memory store for OTPs (Dummy implementation)
const otpStore = new Map();

export const sendOtpEmail = async (email) => {
  const otp = generateOTP();
  const expiry = getOtpExpiry();
  otpStore.set(email, { otp, expiry });
  console.log(`[DUMMY] Sending OTP ${otp} to email ${email}`);
  return true;
};

sendOtpEmail.validateOtp = async (email, code) => {
  const record = otpStore.get(email);
  if (!record) return false;
  if (new Date() > record.expiry) {
    otpStore.delete(email);
    return false;
  }
  return record.otp === code;
};

export const sendOtpSMS = async (phone) => {
  const otp = generateOTP();
  const expiry = getOtpExpiry();
  otpStore.set(phone, { otp, expiry });
  console.log(`[DUMMY] Sending OTP ${otp} to phone ${phone}`);
  return true;
};

sendOtpSMS.validateOtp = async (phone, code) => {
  const record = otpStore.get(phone);
  if (!record) return false;
  if (new Date() > record.expiry) {
    otpStore.delete(phone);
    return false;
  }
  return record.otp === code;
};
