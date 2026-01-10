import { Router } from "express";
import { getProfile } from "../controller/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import RateLimit from "express-rate-limit";

const router = Router();

const userProfileLimiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

router.get("/me", authMiddleware, userProfileLimiter, getProfile);

export default router;
