const mysql = require('mysql');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Ro0tsUx22!1!',
    database: 'employee_db'
  },
  console.log('Connected to the employee database!')
);

module.exports = db;