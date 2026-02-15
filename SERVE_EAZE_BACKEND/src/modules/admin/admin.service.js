// src/modules/admin/admin.service.js
import User from "../users/user.model.js";
import Provider from "../providers/provider.model.js";
import Service from "../services/service.model.js";
import Booking from "../bookings/booking.model.js";
import Payment from "../payments/payment.model.js";
import { generateReports } from "./reports.service.js";

class AdminService {
  // ===== User Management =====
  async getAllUsers(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const users = await User.find().skip(skip).limit(limit).select("-password");
    const total = await User.countDocuments();
    return { users, total, page, pages: Math.ceil(total / limit) };
  }

  async blockUser(userId) {
    const user = await User.findByIdAndUpdate(userId, { isBlocked: true }, { new: true });
    if (!user) throw new Error("User not found");
    return user;
  }

  async unblockUser(userId) {
    const user = await User.findByIdAndUpdate(userId, { isBlocked: false }, { new: true });
    if (!user) throw new Error("User not found");
    return user;
  }

  async verifyStudentId(userId) {
    const user = await User.findByIdAndUpdate(userId, { isVerified: true }, { new: true });
    if (!user) throw new Error("User not found");
    return user;
  }

  // ===== Service Management =====
  async getAllServices(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const services = await Service.find().skip(skip).limit(limit);
    const total = await Service.countDocuments();
    return { services, total, page, pages: Math.ceil(total / limit) };
  }

  async approveService(serviceId) {
    const service = await Service.findByIdAndUpdate(serviceId, { isApproved: true }, { new: true });
    if (!service) throw new Error("Service not found");
    return service;
  }

  async removeService(serviceId) {
    const service = await Service.findByIdAndDelete(serviceId);
    if (!service) throw new Error("Service not found");
    return service;
  }

  // ===== Transaction Management =====
  async getAllPayments(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const payments = await Payment.find().populate("user").skip(skip).limit(limit);
    const total = await Payment.countDocuments();
    return { payments, total, page, pages: Math.ceil(total / limit) };
  }

  async getReports(filter = {}) {
    return generateReports(filter);
  }
}

export default new AdminService();
