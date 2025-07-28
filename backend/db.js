const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

console.log("📦 DB_USER:", process.env.DB_USER);
console.log("📦 DB_PASSWORD:", process.env.DB_PASSWORD ? "********" : "(empty)");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err.message);
  } else {
    console.log("✅ MySQL connected successfully!");
  }
});

module.exports = db;
