// src/server.js
import http from "http";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";
import { startAnalyticsJob } from "./jobs/analytics.job.js";
import { startRemindersJob } from "./jobs/reminders.job.js";
import logger from "./utils/logger.js";

dotenv.config();

// ===== Debug Logging =====
console.log("===== ServeEaze Backend Starting =====");
console.log("PORT:", process.env.PORT);
console.log("Mongo URI:", process.env.MONGO_URI);

// ===== MongoDB Connection =====
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    logger.error(`MongoDB connection failed: ${err.message}`);
    console.error(`❌ MongoDB connection failed: ${err.message}`);
    process.exit(1);
  }
};

connectDB();

// ===== Start HTTP Server =====
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
  console.log(`✅ Server running on port ${PORT}`);
});

// ===== Initialize Socket.IO =====
const io = app.setupSockets(server);
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
