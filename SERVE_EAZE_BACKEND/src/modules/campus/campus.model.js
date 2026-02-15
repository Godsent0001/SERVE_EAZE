// src/modules/campus/campus.model.js
import mongoose from "mongoose";

const campusSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: true,
      },
    },
    zone: { type: String, required: true }, // e.g., "North Campus", "South Campus"
    description: { type: String },
  },
  { timestamps: true }
);

// Create a 2dsphere index for geospatial queries
campusSchema.index({ location: "2dsphere" });

export default mongoose.model("Campus", campusSchema);
