// src/config/cloudinary.js
import { v2 as cloudinary } from "cloudinary";
import { env } from "./env.js";

// Configure Cloudinary
cloudinary.config({
  cloud_name: env.CLOUDINARY.CLOUD_NAME,
  api_key: env.CLOUDINARY.API_KEY,
  api_secret: env.CLOUDINARY.API_SECRET,
});

// Upload helper (enterprise reusable function)
export const uploadToCloudinary = async (filePath, folder = "serveeaze") => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder,
      resource_type: "auto", // image, video, pdf, etc.
      transformation: [{ quality: "auto" }],
    });

    return {
      url: result.secure_url,
      public_id: result.public_id,
    };
  } catch (error) {
    console.error("❌ Cloudinary Upload Error:", error);
    throw new Error("Cloudinary upload failed");
  }
};

// Delete file helper
export const deleteFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("❌ Cloudinary Delete Error:", error);
  }
};

export default cloudinary;
