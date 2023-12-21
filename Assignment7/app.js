const express = require("express");
require("dotenv").config();
const sequelize = require("./config/sequelize"); // Adjusted path for sequelize configuration
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// Establish database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established.");
    await sequelize.sync(); // Sync models with the database
  } catch (error) {
    console.error("Database connection failed:", error);
  }
})();

// User routes
app.use("/users", userRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the User Management API");
});

module.exports = app;
