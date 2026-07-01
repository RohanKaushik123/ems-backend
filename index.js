const express = require("express");
const mongoose = require("mongoose");

const app = express();
const employeeRoutes = require("./routes/employeeRoutes");
const loggerMiddleware = require("./middleware/loggerMiddleware");

app.use(express.json());
app.use(loggerMiddleware);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use("/employees", employeeRoutes);

app.get("/", (req, res) => {
  res.send("Employee Management API Running");
});

const PORT = process.env.PORT || 5100;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/ems";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server Running on Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    app.listen(PORT, () => {
      console.log(`Server Running on Port ${PORT} without database connection`);
    });
  });