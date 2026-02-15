// src/modules/admin/reports.service.js
import User from "../users/user.model.js";
import Service from "../services/service.model.js";
import Booking from "../bookings/booking.model.js";
import Payment from "../payments/payment.model.js";

export const generateReports = async (filter = {}) => {
  const totalUsers = await User.countDocuments();
  const totalProviders = await User.countDocuments({ role: "provider" });
  const totalServices = await Service.countDocuments();
  const totalBookings = await Booking.countDocuments();
  const completedBookings = await Booking.countDocuments({ status: "COMPLETED" });
  const totalRevenueAgg = await Payment.aggregate([
    { $group: { _id: null, total: { $sum: "$amount" } } },
  ]);
  const totalRevenue = totalRevenueAgg[0]?.total || 0;

  return {
    totalUsers,
    totalProviders,
    totalServices,
    totalBookings,
    completedBookings,
    totalRevenue,
  };
};
