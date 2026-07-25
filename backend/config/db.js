const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "leaddesk_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function initDatabase() {
  const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;

  const createLeadsTable = `
    CREATE TABLE IF NOT EXISTS leads (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) NOT NULL,
      budget VARCHAR(50) NOT NULL,
      message TEXT NOT NULL,
      status ENUM('New','Contacted','Closed') DEFAULT 'New',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;

  try {
    const connection = await pool.getConnection();
    await connection.query(createUsersTable);
    await connection.query(createLeadsTable);
    connection.release();
    console.log("Database tables are ready (users, leads)");
  } catch (error) {
    console.error("Failed to initialize database tables:", error.message);
    throw error;
  }
}

console.log("Database:", process.env.DB_NAME);

module.exports = { pool, initDatabase };
