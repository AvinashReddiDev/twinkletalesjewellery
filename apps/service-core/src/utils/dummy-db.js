import bcrypt from "bcrypt";

export const users = [
  {
    id: "1",
    email: "admin@twinkletales.com",
    password: bcrypt.hashSync("admin123", 10),
    role: "ADMIN",
  },
  {
    id: "2",
    email: "user@twinkletales.com",
    password: bcrypt.hashSync("user123", 10),
    role: "USER",
  },
];

export const orders = [];
export const refreshSessions = [];
