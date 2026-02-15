// src/middlewares/auth.middleware.js
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import User from "../modules/users/user.model.js";

/**
 * Protect routes (authenticated users only)
 */
export const protect = async (req, res, next) => {
  let token;

  // Check for Bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET);

    // Attach user to request
    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) {
      return res.status(401).json({ message: "User no longer exists" });
    }

    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
};
