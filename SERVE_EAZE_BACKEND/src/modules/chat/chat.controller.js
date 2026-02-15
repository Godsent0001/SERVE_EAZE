// src/modules/chat/chat.controller.js
import ChatService from "./chat.service.js";

class ChatController {
  async getOrCreateChat(req, res, next) {
    try {
      const participants = [req.user._id, req.body.otherUserId];
      const chat = await ChatService.getOrCreateChat(participants);
      res.json(chat);
    } catch (err) {
      next(err);
    }
  }

  async sendMessage(req, res, next) {
    try {
      const { chatId, content, type } = req.body;
      const message = await ChatService.sendMessage({
        chatId,
        senderId: req.user._id,
        content,
        type: type || "text",
      });
      res.status(201).json(message);
    } catch (err) {
      next(err);
    }
  }

  async getUserChats(req, res, next) {
    try {
      const chats = await ChatService.getUserChats(req.user._id);
      res.json(chats);
    } catch (err) {
      next(err);
    }
  }

  async getChatMessages(req, res, next) {
    try {
      const messages = await ChatService.getChatMessages(req.params.chatId);
      res.json(messages);
    } catch (err) {
      next(err);
    }
  }

  async markAsRead(req, res, next) {
    try {
      await ChatService.markAsRead(req.params.chatId, req.user._id);
      res.json({ message: "Messages marked as read" });
    } catch (err) {
      next(err);
    }
  }
}

export default new ChatController();
