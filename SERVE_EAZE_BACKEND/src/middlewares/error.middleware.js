// src/middlewares/error.middleware.js

// Error-handling middleware for Express
const errorMiddleware = (err, req, res, next) => {
  try {
    // Log error stack in development
    console.error("❌ Error:", err.stack);

    // Prepare response
    const statusCode = err.status || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
      success: false,
      message,
      // Include stack trace in development only
      ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    });
  } catch (middlewareError) {
    // Fallback in case error handling itself fails
    console.error("❌ Error in errorMiddleware:", middlewareError.stack);
    res.status(500).json({
      success: false,
      message: "Critical server error",
    });
  }
};

export default errorMiddleware;
