// src/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const properties = require('./config/properties');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = properties.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});