const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = `
    INSERT INTO contact_messages (name, email, subject, message)
    VALUES (?, ?, ?, ?)
  `;
  const values = [name, email, subject, message];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("❌ Failed to insert:", err);
      return res.status(500).json({ message: "Something went wrong. Please try again." });
    }
    return res.status(200).json({ message: "✅ Message sent successfully!" });
  });
});

module.exports = router;
