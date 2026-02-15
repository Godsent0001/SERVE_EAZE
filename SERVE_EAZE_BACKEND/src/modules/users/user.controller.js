// src/modules/users/user.controller.js
import UserService from "./user.service.js";

class UserController {
  async getProfile(req, res, next) {
    try {
      const user = await UserService.getUserById(req.user._id);
      res.json(user);
    } catch (err) {
      next(err);
    }
  }

  async updateProfile(req, res, next) {
    try {
      const user = await UserService.updateUser(req.user._id, req.body);
      res.json({ message: "Profile updated", user });
    } catch (err) {
      next(err);
    }
  }

  // Admin functions
  async getAllUsers(req, res, next) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (err) {
      next(err);
    }
  }

  async deleteUser(req, res, next) {
    try {
      const user = await UserService.deleteUser(req.params.id);
      res.json({ message: "User deleted", user });
    } catch (err) {
      next(err);
    }
  }
}

export default new UserController();
