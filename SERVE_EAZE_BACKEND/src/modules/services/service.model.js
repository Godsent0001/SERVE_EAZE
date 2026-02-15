// src/modules/services/service.model.js
import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    provider: { type: mongoose.Schema.Types.ObjectId, ref: "Provider", required: true },
    category: { type: String, required: true },
    subcategory: { type: String },
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    pricingType: { type: String, enum: ["fixed", "negotiable"], default: "fixed" },
    images: [{ type: String }],
    availability: [
      {
        day: { type: String }, // e.g., Monday
        startTime: { type: String }, // e.g., "08:00"
        endTime: { type: String }, // e.g., "17:00"
      },
    ],
    campusZone: { type: String }, // e.g., "North Campus"
    location: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: { type: [Number], required: true }, // [lng, lat]
    },
    rating: { type: Number, default: 0 },
    completedJobs: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// 2dsphere index for geospatial queries
serviceSchema.index({ location: "2dsphere" });

export default mongoose.model("Service", serviceSchema);
