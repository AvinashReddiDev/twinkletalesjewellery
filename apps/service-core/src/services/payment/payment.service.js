export const initiatePayment = (orderId, method) => {
  if (!["UPI", "COD"].includes(method)) {
    throw new Error("Invalid payment method");
  }

  return {
    orderId,
    paymentId: Date.now().toString(),
    method,
    status: method === "COD" ? "CONFIRMED" : "UPI_PENDING",
  };
};
