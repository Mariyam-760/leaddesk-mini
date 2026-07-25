const express = require("express");
const router = express.Router();

const {
  createLead,
  getLeads,
  updateLeadStatus,
  deleteLead,
} = require("../controllers/leadController");

const authMiddleware = require("../middleware/authMiddleware");

// Public route
router.post("/", createLead);

// Protected routes
router.get("/", authMiddleware, getLeads);

router.patch("/:id/status", authMiddleware, updateLeadStatus);

router.delete("/:id", authMiddleware, deleteLead);

module.exports = router;