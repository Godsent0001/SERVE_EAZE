// src/modules/admin/admin.controller.js
import AdminService from "./admin.service.js";

class AdminController {
  // ===== Users =====
  async getUsers(req, res, next) {
    try {
      const { page, limit } = req.query;
      const result = await AdminService.getAllUsers(Number(page) || 1, Number(limit) || 20);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async blockUser(req, res, next) {
    try {
      const user = await AdminService.blockUser(req.params.id);
      res.json({ message: "User blocked successfully", user });
    } catch (error) {
      next(error);
    }
  }

  async unblockUser(req, res, next) {
    try {
      const user = await AdminService.unblockUser(req.params.id);
      res.json({ message: "User unblocked successfully", user });
    } catch (error) {
      next(error);
    }
  }

  async verifyStudent(req, res, next) {
    try {
      const user = await AdminService.verifyStudentId(req.params.id);
      res.json({ message: "Student verified successfully", user });
    } catch (error) {
      next(error);
    }
  }

  // ===== Services =====
  async getServices(req, res, next) {
    try {
      const { page, limit } = req.query;
      const result = await AdminService.getAllServices(Number(page) || 1, Number(limit) || 20);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async approveService(req, res, next) {
    try {
      const service = await AdminService.approveService(req.params.id);
      res.json({ message: "Service approved", service });
    } catch (error) {
      next(error);
    }
  }

  async removeService(req, res, next) {
    try {
      const service = await AdminService.removeService(req.params.id);
      res.json({ message: "Service removed", service });
    } catch (error) {
      next(error);
    }
  }

  // ===== Transactions / Reports =====
  async getPayments(req, res, next) {
    try {
      const { page, limit } = req.query;
      const result = await AdminService.getAllPayments(Number(page) || 1, Number(limit) || 20);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async getReports(req, res, next) {
    try {
      const filter = req.query || {};
      const report = await AdminService.getReports(filter);
      res.json(report);
    } catch (error) {
      next(error);
    }
  }
}

export default new AdminController();
