// src/modules/providers/provider.service.js
import Provider from "./provider.model.js";

class ProviderService {
  // Create provider profile
  async createProvider(data) {
    const provider = await Provider.create(data);
    return provider;
  }

  // Get provider by user ID
  async getProviderByUserId(userId) {
    const provider = await Provider.findOne({ user: userId });
    if (!provider) throw new Error("Provider profile not found");
    return provider;
  }

  // Update provider profile
  async updateProvider(userId, data) {
    const provider = await Provider.findOneAndUpdate({ user: userId }, data, { new: true });
    if (!provider) throw new Error("Provider profile not found");
    return provider;
  }

  // Admin: approve or reject provider
  async setApproval(providerId, approved) {
    const provider = await Provider.findByIdAndUpdate(providerId, { approved }, { new: true });
    if (!provider) throw new Error("Provider not found");
    return provider;
  }

  // List providers with optional filters (category, location, rating)
  async listProviders(filters = {}) {
    const query = { approved: true };

    if (filters.category) query.category = filters.category;
    if (filters.subcategory) query.subcategory = filters.subcategory;

    // Geospatial filter: near a location
    if (filters.lng && filters.lat && filters.radius) {
      query.location = {
        $nearSphere: {
          $geometry: { type: "Point", coordinates: [filters.lng, filters.lat] },
          $maxDistance: filters.radius,
        },
      };
    }

    const providers = await Provider.find(query).populate("user", "name photo");
    return providers;
  }
}

export default new ProviderService();
