// src/modules/campus/campus.controller.js
import CampusService from "./campus.service.js";

class CampusController {
  async createCampus(req, res, next) {
    try {
      const campus = await CampusService.createCampus(req.body);
      res.status(201).json({ message: "Campus created", campus });
    } catch (err) {
      next(err);
    }
  }

  async getAllCampuses(req, res, next) {
    try {
      const campuses = await CampusService.getAllCampuses();
      res.json(campuses);
    } catch (err) {
      next(err);
    }
  }

  async getCampusById(req, res, next) {
    try {
      const campus = await CampusService.getCampusById(req.params.id);
      res.json(campus);
    } catch (err) {
      next(err);
    }
  }

  async updateCampus(req, res, next) {
    try {
      const campus = await CampusService.updateCampus(req.params.id, req.body);
      res.json({ message: "Campus updated", campus });
    } catch (err) {
      next(err);
    }
  }

  async deleteCampus(req, res, next) {
    try {
      const campus = await CampusService.deleteCampus(req.params.id);
      res.json({ message: "Campus deleted", campus });
    } catch (err) {
      next(err);
    }
  }

  async findNearbyProviders(req, res, next) {
    try {
      const { campusId, radius } = req.query;
      const providers = await CampusService.findNearbyProviders({
        campusId,
        radius: Number(radius) || 1000,
      });
      res.json(providers);
    } catch (err) {
      next(err);
    }
  }
}

export default new CampusController();
