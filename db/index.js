const mongoose = require('mongoose');
require('dotenv').config();
const conn = mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = conn;