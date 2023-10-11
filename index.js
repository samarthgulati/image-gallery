const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

mongoose.connect(process.env.DB);

const db = mongoose.connection;

db.on('open', () => {
  console.log('Connected to the database.');
});

db.on('error', (err) => {
  console.log(`Database error: ${err}`);
});

app.use(express.static('client/public'));
app.use(express.static('client/build'));

app.use('/api/images', require('./images'));
app.use('/api/users', require('./users'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});