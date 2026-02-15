// src/modules/users/user.model.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    photo: { type: String, default: null },
    role: { type: String, enum: ["student", "provider", "admin"], default: "student" },
    campus: { type: String },
    department: { type: String },
    isEmailVerified: { type: Boolean, default: false },
    isPhoneVerified: { type: Boolean, default: false },
    studentId: { type: String, default: null },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
