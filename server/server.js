import { config } from "dotenv";
import express, { json } from "express";
import cors from "cors";
import connectToMongoDB from "./database/connectToMongoDB.js";
import authRoutes from "./routes/authRoutes.js";
import ExpressError from "./utils/ExpressError.js";

const app = express();
config();

app.use(json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/auth", authRoutes);

app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Internal Server Error" } = err;
  res.status(statusCode).send(message);
});

app.listen(PORT, (req, res) => {
  connectToMongoDB();
  console.log(`Server running  on port: ${PORT}`);
});

