const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const saltRounds = 10; // This can be adjusted based on security requirements

const authenticationService = {
  // Hashes a password
  async hashPassword(password) {
    return bcrypt.hash(password, saltRounds);
  },

  // Compares a plain text password with a hashed password
  async comparePassword(plainPassword, hashedPassword) {
    return bcrypt.compare(plainPassword, hashedPassword);
  },

  // Generates a JWT token
  generateToken(user) {
    const payload = {
      id: user.id, // You can add more user details to the payload if needed
      email: user.email,
    };

    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }); // Token expiration can be adjusted
  },
};

module.exports = authenticationService;
