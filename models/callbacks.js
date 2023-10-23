const mongoose = require('mongoose');

const callbackSchema = new mongoose.Schema({
    Name: String,
    ContactNo: Number,
    CallBackTime: Date, // Use Date for date and time
    Comment: String
});

module.exports = mongoose.model('Callbacks', callbackSchema);
