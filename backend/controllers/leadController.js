const { pool } = require("../config/db");

const VALID_STATUSES = ["New", "Contacted", "Closed"];

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function createLead(req, res) {
  try {
    let { name, email, budget, message } = req.body;

    // Trim values
    name = name?.trim();
    email = email?.trim();
    budget = budget?.trim();
    message = message?.trim();

    // Name Validation
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name is required.",
      });
    }

    if (name.length < 2 || name.length > 50) {
      return res.status(400).json({
        success: false,
        message: "Name must be between 2 and 50 characters.",
      });
    }

    if (!/^[A-Za-z\s'-]+$/.test(name)) {
      return res.status(400).json({
        success: false,
        message:
          "Name can only contain letters, spaces, apostrophes and hyphens.",
      });
    }

    // Email Validation
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required.",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    // Budget Validation
    if (!budget) {
      return res.status(400).json({
        success: false,
        message: "Please select a budget range.",
      });
    }

    // Message Validation
    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required.",
      });
    }

    if (message.length < 10 || message.length > 500) {
      return res.status(400).json({
        success: false,
        message: "Message must be between 10 and 500 characters.",
      });
    }

    const [result] = await pool.query(
      "INSERT INTO leads (name, email, budget, message, status) VALUES (?, ?, ?, ?, ?)",
      [name, email, budget, message, "New"]
    );

    const [rows] = await pool.query(
      "SELECT * FROM leads WHERE id = ?",
      [result.insertId]
    );

    return res.status(201).json({
      success: true,
      message: "Lead submitted successfully.",
      data: rows[0],
    });
  } catch (error) {
    console.error("Create lead error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong on our end.",
    });
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
