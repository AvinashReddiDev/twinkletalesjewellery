import { Router } from "express";
import { initiatePayment } from "../controller/payment.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import rateLimit from "express-rate-limit";

const router = Router();

const paymentRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 payment requests per windowMs
});

router.post("/", paymentRateLimiter, authMiddleware, initiatePayment);

export default router;
