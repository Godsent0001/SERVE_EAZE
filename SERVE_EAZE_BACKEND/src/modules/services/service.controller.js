// src/modules/services/service.controller.js
import ServiceService from "./service.service.js";

class ServiceController {
  async createService(req, res, next) {
    try {
      const service = await ServiceService.createService({
        ...req.body,
        provider: req.user._id,
      });
      res.status(201).json({ message: "Service created", service });
    } catch (err) {
      next(err);
    }
  }

  async updateService(req, res, next) {
    try {
      const service = await ServiceService.updateService(req.params.id, req.user._id, req.body);
      res.json({ message: "Service updated", service });
    } catch (err) {
      next(err);
    }
  }

  async deleteService(req, res, next) {
    try {
      const service = await ServiceService.deleteService(req.params.id, req.user._id);
      res.json({ message: "Service deleted", service });
    } catch (err) {
      next(err);
    }
  }

  async listServices(req, res, next) {
    try {
      const filters = {
        category: req.query.category,
        subcategory: req.query.subcategory,
        minPrice: req.query.minPrice ? Number(req.query.minPrice) : undefined,
        maxPrice: req.query.maxPrice ? Number(req.query.maxPrice) : undefined,
        campusZone: req.query.campusZone,
        lng: req.query.lng ? Number(req.query.lng) : undefined,
        lat: req.query.lat ? Number(req.query.lat) : undefined,
        radius: req.query.radius ? Number(req.query.radius) : undefined,
      };
      const services = await ServiceService.listServices(filters);
      res.json(services);
    } catch (err) {
      next(err);
    }
  }

  async getService(req, res, next) {
    try {
      const service = await ServiceService.getServiceById(req.params.id);
      res.json(service);
    } catch (err) {
      next(err);
    }
  }
}

export default new ServiceController();
