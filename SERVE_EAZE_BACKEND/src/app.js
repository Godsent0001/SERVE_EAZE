// src/app.js
import express from "express";
import cors from "cors";
import morgan from "morgan";
import http from "http";
import { Server as SocketServer } from "socket.io";
import routes from "./routes/index.js";
import { initChatSocket } from "./sockets/chat.socket.js";
import { initNotificationSocket } from "./sockets/notification.socket.js";
import errorMiddleware from "./middlewares/error.middleware.js";

// Create express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.use("/api/v1", routes);

// Error middleware (must be after routes)
app.use(errorMiddleware);

// ===== Socket.IO Setup =====
let io; // will hold socket instance

export const setupSockets = (server) => {
  io = new SocketServer(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  // Initialize individual sockets
  initChatSocket(io);
  initNotificationSocket(io);

  console.log("✅ Socket.IO setup complete");

  return io;
};

// Optionally allow access to io in other modules
export const getIO = () => io;

// Default export for server.js
export default app;
