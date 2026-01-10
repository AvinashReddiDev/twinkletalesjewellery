import * as authService from "../services/auth/auth.service.js";
import { loginSchema } from "../services/auth/auth.schema.js";

export const login = async (req, res) => {
  const data = loginSchema.parse(req.body);
  const { accessToken, refreshToken } = await authService.login(data);

  res
    .cookie("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "lax",
    })
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "lax",
    })
    .json({ message: "Login successful" });
};

export const refresh = (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh token missing" });
  }

  const accessToken = authService.refresh(refreshToken);

  res
    .cookie("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "lax",
    })
    .json({ message: "Token refreshed" });
};
