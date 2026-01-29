import express from 'express';
import { pool } from './db.js';

const app = express();
const port = process.env.PORT;

app.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM users');
  res.send(`
    <h1>Users</h1>
    <ul>
      ${rows.map(u => `<li>${u.name} (${u.email})</li>`).join('')}
    </ul>
  `);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
