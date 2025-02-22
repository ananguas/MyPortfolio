const express = require('express');
const router = express.Router();
const db = require('../db'); 

// POST route to handle contact form submissions
router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  console.log('Incoming data:', { name, email, message });

  const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  db.execute(query, [name, email, message])
    .then(() => {
      console.log('Data successfully inserted into contacts table.');
      res.status(200).json({ message: 'Form submitted successfully!' });
    })
    .catch((error) => {
      console.error('Database error:', error);
      res.status(500).json({ message: 'Internal server error', error: error.message });
    });
});


module.exports = router;
