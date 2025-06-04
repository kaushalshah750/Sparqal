const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  category: String,
  tags: Array,
  image: String,
  description: String,
  longDescription: String,
  features: Array,
  results: Array,
  technologies: Array,
  timeline: String,
  client: String,
  liveUrl: String,
  githubUrl: String,
});

module.exports = mongoose.model('portfolio', portfolioSchema);