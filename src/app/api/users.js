// api/db.js
import db from '../config/db';

export default async function handler(req, res) {
  try {
    const [rows] = await db.execute('SELECT * FROM your_table');
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data' });
  }
}