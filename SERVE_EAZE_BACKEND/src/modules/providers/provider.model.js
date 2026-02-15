// src/modules/providers/provider.model.js
import mongoose from "mongoose";

const providerSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    bio: { type: String },
    category: { type: String, required: true }, // main service category
    subcategory: { type: String },
    location: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: { type: [Number], required: true }, // [longitude, latitude]
    },
    approved: { type: Boolean, default: false }, // admin approval
    rating: { type: Number, default: 0 },
    completedJobs: { type: Number, default: 0 },
    images: [{ type: String }], // service photos
  },
  { timestamps: true }
);

// 2dsphere index for geospatial queries
providerSchema.index({ location: "2dsphere" });

export default mongoose.model("Provider", providerSchema);
