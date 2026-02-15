// src/modules/chat/message.model.js
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat", required: true },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String },
    type: {
      type: String,
      enum: ["text", "image", "file", "location"],
      default: "text",
    },
    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export default mongoose.model("Message", messageSchema);
