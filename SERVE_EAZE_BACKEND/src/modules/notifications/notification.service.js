// src/modules/notifications/notification.service.js
import Notification from "./notification.model.js";
import { emitToUser } from "../../config/socket.js";

class NotificationService {
  // Create a notification
  async createNotification({ userId, type, title, message, meta = {} }) {
    const notification = await Notification.create({
      user: userId,
      type,
      title,
      message,
      meta,
    });

    // Emit real-time notification to user
    emitToUser(userId.toString(), "notification", notification);

    return notification;
  }

  // Get all notifications for a user
  async getUserNotifications(userId) {
    return Notification.find({ user: userId }).sort({ createdAt: -1 });
  }

  // Mark notification as read
  async markAsRead(notificationId, userId) {
    const notification = await Notification.findOneAndUpdate(
      { _id: notificationId, user: userId },
      { isRead: true },
      { new: true }
    );
    if (!notification) throw new Error("Notification not found");
    return notification;
  }

  // Mark all notifications as read
  async markAllAsRead(userId) {
    await Notification.updateMany({ user: userId, isRead: false }, { isRead: true });
    return { message: "All notifications marked as read" };
  }
}

export default new NotificationService();
