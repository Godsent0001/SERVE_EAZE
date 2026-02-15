// src/config/socket.js
import { Server } from "socket.io";

let io;

export const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*", // replace * with frontend URL in production
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`🔌 Socket connected: ${socket.id}`);

    // Join room (userId)
    socket.on("joinRoom", (userId) => {
      socket.join(userId);
    });

    // Chat message
    socket.on("chatMessage", ({ room, message }) => {
      io.to(room).emit("chatMessage", message);
    });

    // Booking notification
    socket.on("bookingUpdate", ({ userId, data }) => {
      io.to(userId).emit("bookingUpdate", data);
    });

    socket.on("disconnect", () => {
      console.log(`⚡ Socket disconnected: ${socket.id}`);
    });
  });
};

/**
 * Emit to a specific user
 * @param {string} userId
 * @param {string} event
 * @param {any} payload
 */
export const emitToUser = (userId, event, payload) => {
  if (!io) return;
  io.to(userId).emit(event, payload);
};

export default io;
