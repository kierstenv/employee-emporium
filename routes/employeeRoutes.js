const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// GET all employees
router.get('/employees', (req, res) => {
  db.query('SELECT * FROM employees', (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

// GET a single employee by id
router.get('/employees/:id', (req, res) => {
  db.query('SELECT * FROM employees WHERE id = ?', [req.params.id], (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

// POST a new employee
router.post('/employees', (req, res) => {
  db.query('INSERT INTO employees SET ?', [req.body], (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

// DELETE a single employee by id
router.delete('/employees/:id', (req, res) => {
  db.query('DELETE FROM employees WHERE id = ?', [req.params.id], (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

module.exports = router;