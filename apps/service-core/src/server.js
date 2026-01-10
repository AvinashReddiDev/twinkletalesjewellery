import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

app.listen(process.env.PORT, () =>
  console.log("Service Core running on port", process.env.PORT)
);
