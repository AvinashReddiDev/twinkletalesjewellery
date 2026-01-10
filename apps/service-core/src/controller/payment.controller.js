import * as paymentService from "../services/payment/payment.service.js";

/**
 * USER: Initiate payment
 */
export const initiatePayment = (req, res) => {
  const { orderId, method } = req.body;

  if (!orderId || !method) {
    return res.status(400).json({ message: "OrderId & method required" });
  }

  const payment = paymentService.initiatePayment(orderId, method);
  res.json(payment);
};
