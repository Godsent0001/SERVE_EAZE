// src/sockets/chat.socket.js

/**
 * Initialize Chat Socket
 * @param {SocketIO.Server} io - Socket.IO server instance
 */
export const initChatSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("✅ New client connected to chat:", socket.id);

    // Listen for messages
    socket.on("send_message", (data) => {
      console.log("📩 Message received:", data);

      // Broadcast message to all connected clients (or implement rooms later)
      io.emit("receive_message", data);
    });

    // Listen for typing events
    socket.on("typing", (data) => {
      socket.broadcast.emit("typing", data);
    });

    // Disconnect
    socket.on("disconnect", () => {
      console.log("❌ Client disconnected from chat:", socket.id);
    });
  });
};
