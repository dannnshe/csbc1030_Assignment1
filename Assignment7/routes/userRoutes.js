const express = require("express");
const userController = require("../controllers/userController");
const authenticateUser = require("../middlewares/authenticateUser");
const authorizeUser = require("../middlewares/authorizeUser");

const router = express.Router();

// Login Route
router.post("/login", userController.userLogin);

// Get all users (protected route)
router.get("/", authenticateUser, authorizeUser, userController.getAllUsers);

// Get user by ID (protected route)
router.get(
  "/:userId",
  authenticateUser,
  authorizeUser,
  userController.getUserById
);

// Add new user (protected route)
router.post("/", authenticateUser, authorizeUser, userController.addUser);

module.exports = router;
