// src/middlewares/role.middleware.js

/**
 * Role-based access control
 * @param  {...string} roles - allowed roles (e.g., "admin", "provider")
 */
export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: Access denied" });
    }
    next();
  };
};
