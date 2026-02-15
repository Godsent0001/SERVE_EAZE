// src/modules/notifications/notification.controller.js
import NotificationService from "./notification.service.js";

class NotificationController {
  async getUserNotifications(req, res, next) {
    try {
      const notifications = await NotificationService.getUserNotifications(req.user._id);
      res.json(notifications);
    } catch (err) {
      next(err);
    }
  }

  async createNotification(req, res, next) {
    try {
      const { userId, type, title, message, meta } = req.body;
      const notification = await NotificationService.createNotification({
        userId,
        type,
        title,
        message,
        meta,
      });
      res.status(201).json({ message: "Notification created", notification });
    } catch (err) {
      next(err);
    }
  }

  async markAsRead(req, res, next) {
    try {
      const notification = await NotificationService.markAsRead(req.params.id, req.user._id);
      res.json({ message: "Notification marked as read", notification });
    } catch (err) {
      next(err);
    }
  }

  async markAllAsRead(req, res, next) {
    try {
      const result = await NotificationService.markAllAsRead(req.user._id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

export default new NotificationController();
