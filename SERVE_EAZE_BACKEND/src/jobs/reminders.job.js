// src/jobs/reminders.job.js
import cron from "node-cron";
import Booking from "../modules/bookings/booking.model.js";
import { emitToUser } from "../sockets/notification.socket.js";
import logger from "../utils/logger.js";

/**
 * Reminder Job
 * Runs every 5 minutes to check for upcoming bookings
 */
export const startRemindersJob = (io) => {
  cron.schedule("*/5 * * * *", async () => {
    try {
      logger.info("Running Reminder Job...");

      const now = new Date();
      const in30Min = new Date(now.getTime() + 30 * 60 * 1000);

      // Find bookings starting in the next 30 minutes and not yet reminded
      const upcomingBookings = await Booking.find({
        startTime: { $gte: now, $lte: in30Min },
        reminderSent: { $ne: true },
        status: { $in: ["accepted", "in_progress"] },
      });

      for (const booking of upcomingBookings) {
        // Send notification to seeker
        emitToUser(
          booking.seeker.toString(),
          "booking_reminder",
          {
            bookingId: booking._id,
            message: `Reminder: Your booking ${booking._id} starts at ${booking.startTime}`,
          },
          io
        );

        // Send notification to provider
        emitToUser(
          booking.provider.toString(),
          "booking_reminder",
          {
            bookingId: booking._id,
            message: `Reminder: Your booking ${booking._id} starts at ${booking.startTime}`,
          },
          io
        );

        // Mark booking as reminded
        booking.reminderSent = true;
        await booking.save();
      }

      logger.info(`Reminder Job: Sent ${upcomingBookings.length} reminders`);
    } catch (err) {
      logger.error(`Reminder Job Failed: ${err.message}`);
    }
  });
};
