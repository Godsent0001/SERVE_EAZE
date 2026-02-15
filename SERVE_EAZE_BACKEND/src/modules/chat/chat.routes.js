// src/modules/chat/chat.routes.js
import express from "express";
import ChatController from "./chat.controller.js";
import { protect } from "../../middlewares/auth.middleware.js";

const router = express.Router();

// All chat routes require authentication
router.use(protect);

// Create or get chat between users
router.post("/", ChatController.getOrCreateChat);

// Send a message
router.post("/message", ChatController.sendMessage);

// Get all chats for user
router.get("/me", ChatController.getUserChats);

// Get messages for a chat
router.get("/:chatId/messages", ChatController.getChatMessages);

// Mark messages as read
router.patch("/:chatId/read", ChatController.markAsRead);

export default router;
