// src/server.js
import http from "http";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app, { setupSockets } from "./app.js";
import { connectDB } from "./config/db.js";
import { startAnalyticsJob } from "./jobs/analytics.job.js";
import { startRemindersJob } from "./jobs/reminders.job.js";
import logger from "./utils/logger.js";

dotenv.config();

// ===== Debug Logging =====
console.log("===== ServeEaze Backend Starting =====");
console.log("PORT:", process.env.PORT);
console.log("Mongo URI:", process.env.MONGO_URI);

// ===== MongoDB Connection =====
connectDB();

// ===== Start HTTP Server =====
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
  console.log(`✅ Server running on port ${PORT}`);
});

// ===== Initialize Socket.IO =====
const io = setupSockets(server);
console.log("✅ Socket.IO initialized");

// ===== Start Background Jobs =====
startAnalyticsJob();
console.log("✅ Analytics job started");

startRemindersJob(io);
console.log("✅ Reminders job started");

// ===== Handle unhandled rejections =====
process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  server.close(() => process.exit(1));
});
