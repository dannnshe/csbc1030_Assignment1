const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = 5001;

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Set up database connection
const sequelize = require('./sequelize');

// Import and sync User model
const User = require('./models/User')(sequelize);
sequelize.sync();

// Middleware to authenticate user using JWT
const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({error: 'Unauthorized: Missing Token'});
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({error: 'Unauthorized: Invalid token'});
  }
};

// Middleware to authorize user (only user with ID 1 is authorized)
const authorizeUser = (req, res, next) => {
  if (req.user.id !== 1) {
    return res.status(403).json({error: 'Forbidden: User not authorized'});
  }
  next();
};

// Route for user login
app.post('/users/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username, password } });
  if (!user) {
    return res.status(401).json({ error:
