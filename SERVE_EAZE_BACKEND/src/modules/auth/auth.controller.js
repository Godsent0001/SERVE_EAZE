// src/modules/auth/auth.controller.js
import AuthService from "./auth.service.js";
import { registerSchema, loginSchema, verifyEmailSchema, verifyPhoneSchema } from "./auth.validation.js";

class AuthController {
  async register(req, res, next) {
    try {
      const { error } = registerSchema.validate(req.body);
      if (error) return res.status(400).json({ message: error.details[0].message });

      const user = await AuthService.register(req.body);
      res.status(201).json({ message: "User registered successfully", user });
    } catch (err) {
      next(err);
    }
  }

  async login(req, res, next) {
    try {
      const { error } = loginSchema.validate(req.body);
      if (error) return res.status(400).json({ message: error.details[0].message });

      const { user, token } = await AuthService.login(req.body.email, req.body.password);
      res.json({ message: "Login successful", user, token });
    } catch (err) {
      next(err);
    }
  }

  async verifyEmail(req, res, next) {
    try {
      const { error } = verifyEmailSchema.validate(req.body);
      if (error) return res.status(400).json({ message: error.details[0].message });

      const user = await AuthService.verifyEmail(req.body.email, req.body.code);
      res.json({ message: "Email verified successfully", user });
    } catch (err) {
      next(err);
    }
  }

  async verifyPhone(req, res, next) {
    try {
      const { error } = verifyPhoneSchema.validate(req.body);
      if (error) return res.status(400).json({ message: error.details[0].message });

      const user = await AuthService.verifyPhone(req.body.phone, req.body.code);
      res.json({ message: "Phone verified successfully", user });
    } catch (err) {
      next(err);
    }
  }
}

export default new AuthController();
