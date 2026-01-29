// db.js
// Centralized MariaDB pool + small helper for querying.

const mariadb = require("mariadb");
require("dotenv").config();

function requireEnv(name) {
  const val = process.env[name];
  if (!val) {
    throw new Error(
      `Missing required environment variable ${name}. ` +
        `Did you create a .env file (cp .env.example .env) and fill it in?`
    );
  }
  return val;
}

const pool = mariadb.createPool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT || 3306),

  user: requireEnv("DB_USER"),
  password: requireEnv("DB_PASSWORD"),
  database: requireEnv("DB_NAME"),

  connectionLimit: Number(process.env.DB_POOL_LIMIT || 5),
});

async function query(sql, params = []) {
  let conn;
  try {
    conn = await pool.getConnection();
    // mariadb connector returns an array for SELECT; for INSERT it includes insertId, etc.
    return await conn.query(sql, params);
  } finally {
    if (conn) conn.release();
  }
}

module.exports = { pool, query };
