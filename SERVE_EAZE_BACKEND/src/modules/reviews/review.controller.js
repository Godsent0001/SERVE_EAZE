// src/modules/reviews/review.controller.js
import ReviewService from "./review.service.js";

class ReviewController {
  async createReview(req, res, next) {
    try {
      const { bookingId, providerId, rating, comment } = req.body;
      const review = await ReviewService.createReview({
        bookingId,
        providerId,
        seekerId: req.user._id,
        rating,
        comment,
      });
      res.status(201).json({ message: "Review submitted", review });
    } catch (err) {
      next(err);
    }
  }

  async getProviderReviews(req, res, next) {
    try {
      const reviews = await ReviewService.getProviderReviews(req.params.providerId);
      res.json(reviews);
    } catch (err) {
      next(err);
    }
  }

  async getSeekerReviews(req, res, next) {
    try {
      const reviews = await ReviewService.getSeekerReviews(req.user._id);
      res.json(reviews);
    } catch (err) {
      next(err);
    }
  }
}

export default new ReviewController();
