// src/modules/providers/provider.controller.js
import ProviderService from "./provider.service.js";

class ProviderController {
  async createProvider(req, res, next) {
    try {
      const provider = await ProviderService.createProvider({
        ...req.body,
        user: req.user._id,
      });
      res.status(201).json({ message: "Provider profile created", provider });
    } catch (err) {
      next(err);
    }
  }

  async getProvider(req, res, next) {
    try {
      const provider = await ProviderService.getProviderByUserId(req.user._id);
      res.json(provider);
    } catch (err) {
      next(err);
    }
  }

  async updateProvider(req, res, next) {
    try {
      const provider = await ProviderService.updateProvider(req.user._id, req.body);
      res.json({ message: "Provider profile updated", provider });
    } catch (err) {
      next(err);
    }
  }

  async approveProvider(req, res, next) {
    try {
      const { approved } = req.body;
      const provider = await ProviderService.setApproval(req.params.id, approved);
      res.json({ message: `Provider ${approved ? "approved" : "rejected"}`, provider });
    } catch (err) {
      next(err);
    }
  }

  async listProviders(req, res, next) {
    try {
      const filters = {
        category: req.query.category,
        subcategory: req.query.subcategory,
        lng: req.query.lng ? parseFloat(req.query.lng) : undefined,
        lat: req.query.lat ? parseFloat(req.query.lat) : undefined,
        radius: req.query.radius ? parseInt(req.query.radius) : undefined,
      };
      const providers = await ProviderService.listProviders(filters);
      res.json(providers);
    } catch (err) {
      next(err);
    }
  }
}

export default new ProviderController();
