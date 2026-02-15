// src/modules/chat/chat.service.js
import Chat from "./chat.model.js";
import Message from "./message.model.js";
import { emitToUser } from "../../config/socket.js";

class ChatService {
  // Create or get existing chat
  async getOrCreateChat(participants) {
    let chat = await Chat.findOne({ participants: { $all: participants, $size: participants.length } })
      .populate("participants", "name photo");
    if (!chat) {
      chat = await Chat.create({ participants });
    }
    return chat;
  }

  // Send message
  async sendMessage({ chatId, senderId, content, type }) {
    const message = await Message.create({ chat: chatId, sender: senderId, content, type });

    // Update last message in chat
    await Chat.findByIdAndUpdate(chatId, { lastMessage: message._id });

    // Emit to all participants
    const chat = await Chat.findById(chatId).populate("participants", "_id");
    chat.participants.forEach(user => {
      emitToUser(user._id.toString(), "newMessage", message);
    });

    return message;
  }

  // Get all chats for a user
  async getUserChats(userId) {
    const chats = await Chat.find({ participants: userId })
      .populate("participants", "name photo")
      .populate({
        path: "lastMessage",
        populate: { path: "sender", select: "name photo" },
      })
      .sort({ updatedAt: -1 });
    return chats;
  }

  // Get all messages for a chat
  async getChatMessages(chatId) {
    const messages = await Message.find({ chat: chatId })
      .populate("sender", "name photo")
      .sort({ createdAt: 1 });
    return messages;
  }

  // Mark messages as read
  async markAsRead(chatId, userId) {
    await Message.updateMany(
      { chat: chatId, readBy: { $ne: userId } },
      { $push: { readBy: userId } }
    );
  }
}

export default new ChatService();
