const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ro0tsUx22!1!',
    database: 'company'
  },
  console.log('Connected to database!')
);

module.exports = db;