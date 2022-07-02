const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// GET all roles
router.get('/roles', (req, res) => {
  db.query('SELECT * FROM roles', (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

// GET a role by id
router.get('/roles/:id', (req, res) => {
  db.query('SELECT * FROM roles WHERE id = ?', [req.params.id], (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

// DELETE a role by id
router.delete('/roles/:id', (req, res) => {
  db.query('DELETE FROM roles WHERE id = ?', [req.params.id], (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

module.exports = router;