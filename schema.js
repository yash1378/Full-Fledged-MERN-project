
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  pass: String
});

const Data = mongoose.model('Data', userSchema);

module.exports = Data;
