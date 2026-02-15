// src/jobs/analytics.job.js
import cron from "node-cron";
import Booking from "../modules/bookings/booking.model.js";
import Service from "../modules/services/service.model.js";
import User from "../modules/users/user.model.js";
import logger from "../utils/logger.js";

/**
 * Analytics Job
 * Runs periodically (example: every day at 1:00 AM)
 */
export const startAnalyticsJob = () => {
  cron.schedule("0 1 * * *", async () => {
    try {
      logger.info("Starting Analytics Job...");

      // 1. Total users
      const totalUsers = await User.countDocuments();
      const totalStudents = await User.countDocuments({ role: "student" });
      const totalProviders = await User.countDocuments({ role: "provider" });

      // 2. Total bookings
      const totalBookings = await Booking.countDocuments();
      const completedBookings = await Booking.countDocuments({ status: "completed" });

      // 3. Top services by completed bookings
      const topServices = await Booking.aggregate([
        { $match: { status: "completed" } },
        { $group: { _id: "$service", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 5 },
      ]);

      // 4. Revenue analytics (sum of completed payments)
      const revenueResult = await Booking.aggregate([
        { $match: { status: "paid" } },
        { $group: { _id: null, totalRevenue: { $sum: "$amount" } } },
      ]);
      const totalRevenue = revenueResult[0]?.totalRevenue || 0;

      // Log summary
      logger.info(`Analytics Report:
      Total Users: ${totalUsers} (Students: ${totalStudents}, Providers: ${totalProviders})
      Total Bookings: ${totalBookings} (Completed: ${completedBookings})
      Top Services IDs: ${topServices.map((s) => s._id)}
      Total Revenue: ${totalRevenue}
      `);
    } catch (err) {
      logger.error(`Analytics Job Failed: ${err.message}`);
    }
  });
};
