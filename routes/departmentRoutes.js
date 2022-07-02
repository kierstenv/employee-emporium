const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// GET all departments
router.get('/departments', (req, res) => {
  db.query('SELECT * FROM departments', (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

// GET a single department by id
router.get('/departments/:id', (req, res) => {
  db.query('SELECT * FROM departments WHERE id = ?', [req.params.id], (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

module.exports = router;