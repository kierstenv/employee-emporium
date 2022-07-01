const express = require('express');
const db = require("./db/connection");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res) => {
  res.status(404).end();
});

db.query('SELECT * FROM departments', (err, data) => {
  if (err) throw err;
  console.log(data);
});
db.query('SELECT * FROM roles', (err, data) => {
  if (err) throw err;
  console.log(data);
});
db.query('SELECT * FROM employees', (err, data) => {
  if (err) throw err;
  console.log(data);
});

db.connect(err => {
  if (err) throw err;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});

