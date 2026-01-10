import { orders } from "../../utils/dummy-db.js";

export const createOrder = (userId, items, amount) => {
  const order = {
    id: Date.now().toString(),
    userId,
    items,
    amount,
    status: "CREATED",
    createdAt: new Date(),
  };

  orders.push(order);
  return order;
};

export const getOrdersByUser = (userId) => {
  return orders.filter((order) => order.userId === userId);
};

export const getAllOrders = () => {
  return orders;
};
