import { Router } from "express";
import { login, refresh } from "../controller/auth.controller.js";

const router = Router();

router.post("/login", login);
router.post("/refresh", refresh);

export default router;
