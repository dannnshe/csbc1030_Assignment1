const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS, //password: "19850416",
  host: process.env.DB_HOST,
  dialect: "mysql",
});

module.exports = sequelize;
