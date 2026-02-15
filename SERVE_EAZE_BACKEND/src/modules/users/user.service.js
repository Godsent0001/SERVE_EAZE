// src/modules/users/user.service.js
import User from "./user.model.js";
import bcrypt from "bcryptjs";

class UserService {
  // Create new user
  async createUser({ name, email, phone, password, role = "student", campus, department }) {
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error("Email already in use");

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
      role,
      campus,
      department,
    });

    return user;
  }

  // Get user by ID
  async getUserById(userId) {
    const user = await User.findById(userId).select("-password");
    if (!user) throw new Error("User not found");
    return user;
  }

  // Update user profile
  async updateUser(userId, data) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    const user = await User.findByIdAndUpdate(userId, data, { new: true }).select("-password");
    if (!user) throw new Error("User not found");
    return user;
  }

  // Get all users (admin)
  async getAllUsers() {
    return User.find().select("-password").sort({ createdAt: -1 });
  }

  // Delete user (admin)
  async deleteUser(userId) {
    const user = await User.findByIdAndDelete(userId);
    if (!user) throw new Error("User not found");
    return user;
  }
}

export default new UserService();
