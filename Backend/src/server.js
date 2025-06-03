const express = require('express');
const cors = require('cors');
require('dotenv').config();
const properties = require('./config/properties');
const connectDB = require('./config/db');
const indexRoutes = require('./Routes/index.routes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', indexRoutes);
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = properties.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});