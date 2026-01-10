import { Router } from "express";
import { initiatePayment } from "../controller/payment.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, initiatePayment);

export default router;
