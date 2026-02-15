// src/config/db.js
import mongoose from "mongoose";
import { env } from "./env.js";

export const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);

    const conn = await mongoose.connect(env.MONGO_URI, {
      autoIndex: env.NODE_ENV !== "production", // Disable in prod for performance
      serverSelectionTimeoutMS: 5000,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);

    // Retry after 5 seconds (enterprise pattern)
    setTimeout(connectDB, 5000);
  }
};
