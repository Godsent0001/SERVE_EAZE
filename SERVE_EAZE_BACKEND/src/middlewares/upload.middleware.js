// src/middlewares/upload.middleware.js
import multer from "multer";
import { uploadToCloudinary } from "../config/cloudinary.js";
import fs from "fs";

// Temporary local storage before uploading to Cloudinary
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "tmp/uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

// File filter (images only)
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed"), false);
  }
};

export const upload = multer({ storage, fileFilter });

/**
 * Middleware to upload single file to Cloudinary
 * @param {string} fieldName
 */
export const uploadSingle = (fieldName) => async (req, res, next) => {
  if (!req.file) return next();

  try {
    const result = await uploadToCloudinary(req.file.path);
    req.file.cloudinary = result;

    // Delete temp file
    fs.unlink(req.file.path, (err) => {
      if (err) console.error("Temp file delete error:", err);
    });

    next();
  } catch (error) {
    next(error);
  }
};

/**
 * Middleware to upload multiple files to Cloudinary
 * @param {string} fieldName
 * @param {number} maxCount
 */
export const uploadMultiple = (fieldName, maxCount = 5) => async (req, res, next) => {
  if (!req.files || !req.files.length) return next();

  try {
    req.files.cloudinary = [];

    for (const file of req.files) {
      const result = await uploadToCloudinary(file.path);
      req.files.cloudinary.push(result);

      // Delete temp file
      fs.unlink(file.path, (err) => {
        if (err) console.error("Temp file delete error:", err);
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};
