const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const properties = require('./config/properties');
const connectDB = require('./config/db');
const indexRoutes = require('./Routes/index.routes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRoutes);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = properties.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
