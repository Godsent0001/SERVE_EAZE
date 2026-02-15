// src/modules/reviews/review.service.js
import Review from "./review.model.js";
import Provider from "../providers/provider.model.js";

class ReviewService {
  // Create a new review
  async createReview({ bookingId, providerId, seekerId, rating, comment }) {
    // Check if the seeker already reviewed this booking
    const existing = await Review.findOne({ booking: bookingId });
    if (existing) throw new Error("You have already reviewed this booking");

    const review = await Review.create({
      booking: bookingId,
      provider: providerId,
      seeker: seekerId,
      rating,
      comment,
    });

    // Update provider rating
    const providerReviews = await Review.find({ provider: providerId });
    const avgRating =
      providerReviews.reduce((acc, r) => acc + r.rating, 0) / providerReviews.length;

    await Provider.findByIdAndUpdate(providerId, { rating: avgRating });

    return review;
  }

  // Get all reviews for a provider
  async getProviderReviews(providerId) {
    return Review.find({ provider: providerId })
      .populate("seeker", "name photo")
      .sort({ createdAt: -1 });
  }

  // Get all reviews by a seeker
  async getSeekerReviews(seekerId) {
    return Review.find({ seeker: seekerId })
      .populate("provider", "user category subcategory")
      .sort({ createdAt: -1 });
  }
}

export default new ReviewService();
