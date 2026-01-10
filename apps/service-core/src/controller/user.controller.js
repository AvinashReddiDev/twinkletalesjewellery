import { users } from "../utils/dummy-db.js";

export const getProfile = (req, res) => {
  const user = users.find((u) => u.id === req.user.id);
  res.json({
    id: user.id,
    email: user.email,
    role: user.role,
  });
};
