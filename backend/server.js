
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { initDatabase } = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const leadRoutes = require("./routes/leadRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json()); 

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "LeadDesk Mini API is running." });
});


app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);


app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});


app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.stack);
  res.status(500).json({ success: false, message: "Internal server error." });
});

async function startServer() {
  try {
    await initDatabase();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
}

startServer();
