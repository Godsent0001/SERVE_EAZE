// src/modules/auth/auth.service.js
import User from "../users/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { env } from "../../config/env.js";
import { sendOtpEmail, sendOtpSMS } from "../../utils/otp.js";

class AuthService {
  async register(data) {
    // Check if email or phone exists
    const existingUser = await User.findOne({ $or: [{ email: data.email }, { phone: data.phone }] });
    if (existingUser) throw new Error("Email or phone already registered");

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 12);
    const user = await User.create({ ...data, password: hashedPassword, isVerified: false });

    // Send verification OTPs (optional)
    if (data.email) await sendOtpEmail(data.email);
    if (data.phone) await sendOtpSMS(data.phone);

    return user;
  }

  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid credentials");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    const token = jwt.sign({ id: user._id, role: user.role }, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRES_IN,
    });

    return { user, token };
  }

  async verifyEmail(email, code) {
    // Validate OTP
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");

    const valid = await sendOtpEmail.validateOtp(email, code);
    if (!valid) throw new Error("Invalid verification code");

    user.isVerified = true;
    await user.save();
    return user;
  }

  async verifyPhone(phone, code) {
    const user = await User.findOne({ phone });
    if (!user) throw new Error("User not found");

    const valid = await sendOtpSMS.validateOtp(phone, code);
    if (!valid) throw new Error("Invalid verification code");

    user.isVerified = true;
    await user.save();
    return user;
  }
}

export default new AuthService();
