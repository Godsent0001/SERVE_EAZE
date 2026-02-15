// src/modules/bookings/booking.model.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    seeker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    provider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: { type: Date, required: true },
    time: { type: String, required: true }, // store as HH:mm or string
    status: {
      type: String,
      enum: ["REQUESTED", "ACCEPTED", "IN_PROGRESS", "COMPLETED", "PAID", "REVIEWED"],
      default: "REQUESTED",
    },
    price: { type: Number, required: true },
    paymentStatus: { type: String, enum: ["PENDING", "PAID", "FAILED"], default: "PENDING" },
    notes: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
