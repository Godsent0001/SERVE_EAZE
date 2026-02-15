// src/modules/payments/payment.model.js

// This is a placeholder model
// Replace with Mongoose or Sequelize later

export default class Payment {
  constructor({ id, userId, amount, status }) {
    this.id = id;
    this.userId = userId;
    this.amount = amount;
    this.status = status;
    this.createdAt = new Date();
  }
}
