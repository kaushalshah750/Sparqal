const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  company: String,
  type: String,
  project_detail: String,
  status: {
    type: String,
    default: 'new'
  },
  priority: String,
  source: String,
  lastContact: Date,
  notes: Array,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('contact', contactSchema);
