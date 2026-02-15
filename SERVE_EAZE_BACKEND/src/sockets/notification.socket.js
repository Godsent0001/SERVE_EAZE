// src/sockets/notification.socket.js

/**
 * In-memory map of online users
 * userId -> socketId
 * NOTE: Use Redis in production for scaling
 */
const onlineUsers = new Map();

/**
 * Initialize Notification Socket
 * @param {import("socket.io").Server} io
 */
export const initNotificationSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("🔔 Notification client connected:", socket.id);

    /**
     * Register user to receive notifications
     */
    socket.on("registerUser", (userId) => {
      if (!userId) return;

      onlineUsers.set(userId, socket.id);
      console.log(`✅ User ${userId} registered for notifications`);
    });

    /**
     * Handle disconnect
     */
    socket.on("disconnect", () => {
      for (const [userId, sockId] of onlineUsers.entries()) {
        if (sockId === socket.id) {
          onlineUsers.delete(userId);
          console.log(`❌ User ${userId} disconnected from notifications`);
          break;
        }
      }
    });
  });
};

/**
 * Emit notification to a specific user
 * @param {string} userId
 * @param {string} event
 * @param {object} data
 * @param {import("socket.io").Server} io
 */
export const emitToUser = (userId, event, data, io) => {
  const socketId = onlineUsers.get(userId);

  if (!socketId) {
    console.log(`⚠️ User ${userId} is offline. Notification skipped.`);
    return;
  }

  io.to(socketId).emit(event, data);
  console.log(`📢 Notification sent to user ${userId}: ${event}`);
};
