// src/modules/bookings/booking.service.js
import Booking from "./booking.model.js";
import Service from "../services/service.model.js";
import { emitToUser } from "../../config/socket.js";

class BookingService {
  // Create a new booking
  async createBooking({ serviceId, seekerId, date, time, notes }) {
    const service = await Service.findById(serviceId).populate("provider");
    if (!service) throw new Error("Service not found");

    const booking = await Booking.create({
      service: serviceId,
      seeker: seekerId,
      provider: service.provider._id,
      date,
      time,
      price: service.price,
      notes,
    });

    // Notify provider
    emitToUser(service.provider._id.toString(), "bookingUpdate", {
      bookingId: booking._id,
      status: booking.status,
    });

    return booking;
  }

  // Get bookings for seeker
  async getSeekerBookings(seekerId, status = null) {
    const query = { seeker: seekerId };
    if (status) query.status = status;

    return Booking.find(query)
      .populate("service")
      .populate("provider", "name photo")
      .sort({ createdAt: -1 });
  }

  // Get bookings for provider
  async getProviderBookings(providerId, status = null) {
    const query = { provider: providerId };
    if (status) query.status = status;

    return Booking.find(query)
      .populate("service")
      .populate("seeker", "name photo")
      .sort({ createdAt: -1 });
  }

  // Update booking status
  async updateStatus(bookingId, status) {
    const booking = await Booking.findById(bookingId);
    if (!booking) throw new Error("Booking not found");

    booking.status = status;
    await booking.save();

    // Notify both seeker and provider
    emitToUser(booking.seeker.toString(), "bookingUpdate", { bookingId, status });
    emitToUser(booking.provider.toString(), "bookingUpdate", { bookingId, status });

    return booking;
  }

  // Mark payment status
  async markPayment(bookingId, paymentStatus) {
    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { paymentStatus },
      { new: true }
    );
    if (!booking) throw new Error("Booking not found");

    emitToUser(booking.seeker.toString(), "paymentUpdate", { bookingId, paymentStatus });
    return booking;
  }
}

export default new BookingService();
