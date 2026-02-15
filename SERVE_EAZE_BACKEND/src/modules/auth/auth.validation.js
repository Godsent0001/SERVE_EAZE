// src/modules/auth/auth.validation.js
import Joi from "joi";

export const registerSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10).max(15).required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid("student", "provider").required(),
  campus: Joi.string().optional(),
  department: Joi.string().optional(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const verifyEmailSchema = Joi.object({
  email: Joi.string().email().required(),
  code: Joi.string().length(6).required(),
});

export const verifyPhoneSchema = Joi.object({
  phone: Joi.string().min(10).max(15).required(),
  code: Joi.string().length(6).required(),
});
