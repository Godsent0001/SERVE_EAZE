// src/utils/apiResponse.js

/**
 * Standard API response helper
 */

export const successResponse = (res, data = {}, message = "Success", statusCode = 200) => {
  return res.status(statusCode).json({
    status: "success",
    message,
    data,
  });
};

export const errorResponse = (res, error = "Something went wrong", statusCode = 500) => {
  return res.status(statusCode).json({
    status: "error",
    message: error.toString(),
  });
};

export const validationErrorResponse = (res, errors, statusCode = 400) => {
  return res.status(statusCode).json({
    status: "fail",
    message: "Validation failed",
    errors,
  });
};
