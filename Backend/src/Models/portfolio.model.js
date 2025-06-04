const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  category: String,
  tags: Array,
});

module.exports = mongoose.model('portfolio', portfolioSchema);