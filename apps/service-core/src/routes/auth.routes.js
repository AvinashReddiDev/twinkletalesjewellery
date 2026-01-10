import { Router } from "express";
import { login, refresh } from "../controller/auth.controller.js";
import rateLimit from "express-rate-limit";

const router = Router();

const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

router.post("/login", authRateLimiter, login);
router.post("/refresh", authRateLimiter, refresh);

export default router;
