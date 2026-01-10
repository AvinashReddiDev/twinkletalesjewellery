import { Router } from "express";
import {
  createOrder,
  getMyOrders,
  getAllOrders,
} from "../controller/order.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";
import rateLimit from "express-rate-limit";

const router = Router();

const orderRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs for this route
  standardHeaders: true,
  legacyHeaders: false,
});

// USER
router.post("/", authMiddleware, orderRateLimiter, createOrder);
router.get("/me", authMiddleware, orderRateLimiter, getMyOrders);

// ADMIN
router.get("/", orderRateLimiter, authMiddleware, adminMiddleware, getAllOrders);

export default router;
