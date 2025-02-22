require('dotenv').config();

const mysql = require('mysql2/promise'); 

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Database connected successfully!');
    connection.release(); 
  } catch (err) {
    console.error('Database connection failed:', err.message);
  }
})();

module.exports = pool;
