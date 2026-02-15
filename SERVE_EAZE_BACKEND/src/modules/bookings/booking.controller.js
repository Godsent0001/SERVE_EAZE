// src/modules/bookings/booking.controller.js
import BookingService from "./booking.service.js";

class BookingController {
  async createBooking(req, res, next) {
    try {
      const booking = await BookingService.createBooking({
        serviceId: req.body.serviceId,
        seekerId: req.user._id,
        date: req.body.date,
        time: req.body.time,
        notes: req.body.notes,
      });
      res.status(201).json({ message: "Booking created", booking });
    } catch (err) {
      next(err);
    }
  }

  async getSeekerBookings(req, res, next) {
    try {
      const status = req.query.status || null;
      const bookings = await BookingService.getSeekerBookings(req.user._id, status);
      res.json(bookings);
    } catch (err) {
      next(err);
    }
  }

  async getProviderBookings(req, res, next) {
    try {
      const status = req.query.status || null;
      const bookings = await BookingService.getProviderBookings(req.user._id, status);
      res.json(bookings);
    } catch (err) {
      next(err);
    }
  }

  async updateBookingStatus(req, res, next) {
    try {
      const booking = await BookingService.updateStatus(req.params.id, req.body.status);
      res.json({ message: "Booking status updated", booking });
    } catch (err) {
      next(err);
    }
  }

  async markPayment(req, res, next) {
    try {
      const booking = await BookingService.markPayment(req.params.id, req.body.paymentStatus);
      res.json({ message: "Payment status updated", booking });
    } catch (err) {
      next(err);
    }
  }
}

export default new BookingController();
