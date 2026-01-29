import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: 'localhost',
  user: 'demo_user',
  password: 'demo_pass',
  database: 'demo'
});
