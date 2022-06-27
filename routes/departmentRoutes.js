const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// view all departments
router.get('/departments', (req, res) => {
  db.query('SELECT * FROM department', (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});
