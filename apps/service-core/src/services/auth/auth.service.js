import bcrypt from "bcrypt";
import { users, refreshSessions } from "../../utils/dummy-db.js";
import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} from "../../utils/jwt.js";
import { v4 as uuid } from "uuid";

export const login = async ({ email, password }) => {
  const user = users.find(u => u.email === email);
  if (!user) throw new Error("User not found");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Invalid credentials");

  const payload = { id: user.id, role: user.role };

  const accessToken = signAccessToken(payload);
  const refreshToken = signRefreshToken(payload);

  refreshSessions.push({
    sessionId: uuid(),
    refreshToken,
    userId: user.id,
  });

  return { accessToken, refreshToken };
};

export const refresh = (token) => {
  const decoded = verifyRefreshToken(token);
  return signAccessToken({ id: decoded.id, role: decoded.role });
};
