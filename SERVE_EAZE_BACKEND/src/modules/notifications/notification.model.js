// src/modules/notifications/notification.model.js
import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: {
      type: String,
      enum: ["booking", "chat", "payment", "system", "reminder"],
      default: "system",
    },
    title: { type: String, required: true },
    message: { type: String, required: true },
    isRead: { type: Boolean, default: false },
    meta: { type: mongoose.Schema.Types.Mixed }, // optional extra info
  },
  { timestamps: true }
);

export default mongoose.model("Notification", notificationSchema);
