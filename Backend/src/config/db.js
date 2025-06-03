const mongoose = require('mongoose');
const properties = require('./properties');

const connectDB = async () => {
  try {
    await mongoose.connect(properties.MONGO_URI); // No options needed
    console.log('✅ MongoDB connected successfully');
    console.log(`✅ Connected to DB: ${mongoose.connection.name}`);
} catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
