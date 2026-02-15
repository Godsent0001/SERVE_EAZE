// src/modules/campus/campus.service.js
import Campus from "./campus.model.js";
import User from "../users/user.model.js";

class CampusService {
  // Create new campus
  async createCampus(data) {
    const campus = await Campus.create(data);
    return campus;
  }

  // Get all campuses
  async getAllCampuses() {
    return Campus.find();
  }

  // Find nearby providers within radius (in meters)
  async findNearbyProviders({ campusId, radius = 1000 }) {
    const campus = await Campus.findById(campusId);
    if (!campus) throw new Error("Campus not found");

    // Find providers within radius
    const providers = await User.find({
      role: "provider",
      isVerified: true,
      location: {
        $nearSphere: {
          $geometry: campus.location,
          $maxDistance: radius,
        },
      },
    }).select("name photo category location");

    return providers;
  }

  // Get single campus by ID
  async getCampusById(campusId) {
    const campus = await Campus.findById(campusId);
    if (!campus) throw new Error("Campus not found");
    return campus;
  }

  // Update campus
  async updateCampus(campusId, data) {
    const campus = await Campus.findByIdAndUpdate(campusId, data, { new: true });
    if (!campus) throw new Error("Campus not found");
    return campus;
  }

  // Delete campus
  async deleteCampus(campusId) {
    const campus = await Campus.findByIdAndDelete(campusId);
    if (!campus) throw new Error("Campus not found");
    return campus;
  }
}

export default new CampusService();
