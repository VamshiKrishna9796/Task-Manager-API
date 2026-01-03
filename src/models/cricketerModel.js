//create model for cricketer profile
const mongoose = require('mongoose');
const cricketerProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    battingStyle: {
        type: String,
        required: true
    },
    bowlingStyle: {
        type: String,
        required: true
    }
});

const CricketerProfile = mongoose.model('CricketerProfile', cricketerProfileSchema);

module.exports = CricketerProfile;


