// ✅ START of server.js
console.log("✅ server.js STARTED");
const dotenv = require("dotenv");
dotenv.config(); // ✅ Load .env first!

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const contactRoute = require("./routes/contact");
const db = require("./db"); // ✅ Now it has access to env vars

console.log("✅ Environment variables loaded");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", contactRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
