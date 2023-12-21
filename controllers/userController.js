// Import the User model from the User file under models directory
const { User } = require("../models/User");

// Handler to fetch all users from the database
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll(); // Retrieve all users
    res.json(users); // Send the users as a response
  } catch (error) {
    console.error("Error in getAllUsers:", error); // Log the error for debugging
    res.status(500).json({ error: "Internal Server Error" }); // Send an error response
  }
};

// Handler to fetch a single user by their ID
exports.getUserById = async (req, res) => {
  const userId = req.params.id; // Extract user ID from the request parameters
  try {
    const user = await User.findByPk(userId); // Retrieve user by primary key (ID)

    if (!user) {
      return res.status(404).json({ error: "User not found" }); // User not found, send 404
    }

    res.json(user); // Send the found user as a response
  } catch (error) {
    console.error("Error in getUserById:", error); // Log the error for debugging
    res.status(500).json({ error: "Internal Server Error" }); // Send an error response
  }
};

// Handler to add a new user to the database
exports.addUser = async (req, res) => {
  try {
    // Construct a new user object from the request body
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    };

    const user = await User.create(newUser); // Create a new user in the database

    res.status(201).json(user); // Send the created user as a response with status 201
  } catch (error) {
    console.error("Error in addUser:", error); // Log the error for debugging
    res.status(500).json({ error: "Internal Server Error" }); // Send an error response
  }
};
