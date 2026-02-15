// src/modules/services/service.service.js
import Service from "./service.model.js";

class ServiceService {
  // Create a service listing
  async createService(data) {
    const service = await Service.create(data);
    return service;
  }

  // Update a service listing
  async updateService(serviceId, providerId, data) {
    const service = await Service.findOneAndUpdate(
      { _id: serviceId, provider: providerId },
      data,
      { new: true }
    );
    if (!service) throw new Error("Service not found or not owned by provider");
    return service;
  }

  // Delete a service listing
  async deleteService(serviceId, providerId) {
    const service = await Service.findOneAndDelete({ _id: serviceId, provider: providerId });
    if (!service) throw new Error("Service not found or not owned by provider");
    return service;
  }

  // Get services with filters
  async listServices(filters = {}) {
    const query = { isActive: true };

    if (filters.category) query.category = filters.category;
    if (filters.subcategory) query.subcategory = filters.subcategory;
    if (filters.minPrice) query.price = { ...query.price, $gte: filters.minPrice };
    if (filters.maxPrice) query.price = { ...query.price, $lte: filters.maxPrice };
    if (filters.campusZone) query.campusZone = filters.campusZone;

    // Geospatial filter
    if (filters.lng && filters.lat && filters.radius) {
      query.location = {
        $nearSphere: {
          $geometry: { type: "Point", coordinates: [filters.lng, filters.lat] },
          $maxDistance: filters.radius,
        },
      };
    }

    const services = await Service.find(query)
      .populate("provider", "user category subcategory")
      .sort({ createdAt: -1 });
    return services;
  }

  // Get single service
  async getServiceById(serviceId) {
    const service = await Service.findById(serviceId).populate("provider", "user category subcategory");
    if (!service) throw new Error("Service not found");
    return service;
  }
}

export default new ServiceService();
