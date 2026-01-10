import { Router } from "express";
import {
  createOrder,
  getMyOrders,
  getAllOrders,
} from "../controller/order.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";

const router = Router();

// USER
router.post("/", authMiddleware, createOrder);
router.get("/me", authMiddleware, getMyOrders);

// ADMIN
router.get("/", authMiddleware, adminMiddleware, getAllOrders);

export default router;
