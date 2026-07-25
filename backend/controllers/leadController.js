const { pool } = require("../config/db");

const VALID_STATUSES = ["New", "Contacted", "Closed"];

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function createLead(req, res) {
  try {
    const { name, email, budget, message } = req.body;

    // ---- Validation ----
    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, message: "Name is required." });
    }
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ success: false, message: "A valid email is required." });
    }
    if (!budget || !budget.trim()) {
      return res.status(400).json({ success: false, message: "Budget is required." });
    }
    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, message: "Message is required." });
    }

    const [result] = await pool.query(
      "INSERT INTO leads (name, email, budget, message, status) VALUES (?, ?, ?, ?, ?)",
      [name.trim(), email.trim(), budget.trim(), message.trim(), "New"]
    );

    const [rows] = await pool.query("SELECT * FROM leads WHERE id = ?", [result.insertId]);

    return res.status(201).json({
      success: true,
      message: "Lead submitted successfully.",
      data: rows[0],
    });
  } catch (error) {
    console.error("Create lead error:", error.message);
    return res.status(500).json({ success: false, message: "Something went wrong on our end." });
  }
}

async function getLeads(req, res) {
  try {
    const [rows] = await pool.query("SELECT * FROM leads ORDER BY created_at DESC");

    return res.status(200).json({
      success: true,
      count: rows.length,
      data: rows,
    });
  } catch (error) {
    console.error("Get leads error:", error.message);
    return res.status(500).json({ success: false, message: "Something went wrong on our end." });
  }
}

async function updateLeadStatus(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status || !VALID_STATUSES.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Status must be one of: ${VALID_STATUSES.join(", ")}.`,
      });
    }

    const [existing] = await pool.query("SELECT id FROM leads WHERE id = ?", [id]);
    if (existing.length === 0) {
      return res.status(404).json({ success: false, message: "Lead not found." });
    }

    await pool.query("UPDATE leads SET status = ? WHERE id = ?", [status, id]);

    const [rows] = await pool.query("SELECT * FROM leads WHERE id = ?", [id]);

    return res.status(200).json({
      success: true,
      message: "Lead status updated.",
      data: rows[0],
    });
  } catch (error) {
    console.error("Update lead status error:", error.message);
    return res.status(500).json({ success: false, message: "Something went wrong on our end." });
  }
}

async function deleteLead(req, res) {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM leads WHERE id = ?", [id]);

    return res.status(200).json({
      success: true,
      message: "Lead deleted successfully."
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete lead."
    });
  }
}


module.exports = { createLead, getLeads, updateLeadStatus,deleteLead };
