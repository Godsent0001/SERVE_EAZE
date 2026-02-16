// src/config/db.js
import mongoose from "mongoose";
import { env } from "./env.js";
import logger from "../utils/logger.js";

export const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);

    const conn = await mongoose.connect(env.MONGO_URI, {
      autoIndex: env.NODE_ENV !== "production", // Disable in prod for performance
      serverSelectionTimeoutMS: 5000,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const msg = `MongoDB Connected: ${conn.connection.host}`;
    logger.info(msg);
    console.log(`✅ ${msg}`);
  } catch (error) {
    const errorMsg = `MongoDB Connection Error: ${error.message}`;
    logger.error(errorMsg);
    console.error(`❌ ${errorMsg}`);

    if (error.message.includes("ENOTFOUND")) {
      console.error("💡 Hint: Check if your MONGO_URI in .env is correct. If you are not running in Docker, use 127.0.0.1 instead of 'mongo'.");
    }

    // Retry after 5 seconds (enterprise pattern)
    console.log("Re-attempting connection in 5 seconds...");
    setTimeout(connectDB, 5000);
  }
};
