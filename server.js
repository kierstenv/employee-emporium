const express = require('express');
const db = require("./db/connection");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res) => {
  res.status(404).end();
});

db.connect(err => {
  if (err) throw err;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
