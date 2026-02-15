// src/utils/constants.js

export const ROLES = {
  STUDENT: "student",
  PROVIDER: "provider",
  ADMIN: "admin",
};

export const PAYMENT_STATUS = {
  PENDING: "pending",
  COMPLETED: "completed",
  FAILED: "failed",
};

export const BOOKING_STATUS = {
  REQUESTED: "requested",
  ACCEPTED: "accepted",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
  PAID: "paid",
  REVIEWED: "reviewed",
};

export const NOTIFICATION_TYPES = {
  NEW_MESSAGE: "new_message",
  BOOKING_UPDATE: "booking_update",
  PAYMENT_CONFIRMATION: "payment_confirmation",
  JOB_REMINDER: "job_reminder",
  STATUS_CHANGE: "status_change",
};

export const OTP_EXPIRY_MINUTES = 10;
