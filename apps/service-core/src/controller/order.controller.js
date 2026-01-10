import * as orderService from "../services/order/order.service.js";

/**
 * USER: Create Order
 */
export const createOrder = (req, res) => {
  const userId = req.user.id;
  const { items, amount } = req.body;

  if (!items || !amount) {
    return res.status(400).json({ message: "Items and amount required" });
  }

  const order = orderService.createOrder(userId, items, amount);
  res.status(201).json(order);
};

/**
 * USER: Get my orders
 */
export const getMyOrders = (req, res) => {
  const orders = orderService.getOrdersByUser(req.user.id);
  res.json(orders);
};

/**
 * ADMIN: Get all orders
 */
export const getAllOrders = (req, res) => {
  const orders = orderService.getAllOrders();
  res.json(orders);
};
