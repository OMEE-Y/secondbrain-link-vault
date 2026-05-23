const mongoose = require('mongoose');

const linkSchema_db = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true,
    ref: 'User'
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  url: {
    type: String,
    required: true,
    trim: true
  },
}, { timestamps: true });

module.exports = mongoose.model('Link', linkSchema_db);