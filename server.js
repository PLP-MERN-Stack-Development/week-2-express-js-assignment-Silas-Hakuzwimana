import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import { logger } from "./middleware/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";

import ConnectDB from "./config/db.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
ConnectDB();

const app = express();

// Middleware
app.use(cors());
app.use(logger);
app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", productRoutes);

// Default welcome route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});


// 404 fallback
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
