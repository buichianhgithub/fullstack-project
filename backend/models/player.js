const mongoose = require('mongoose');
const config = require('../config/database');

// create playerSchema and Player model
const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ranking: { type: Number, required: true },
    time: String,
    score: Number,
    status: { type: String, required: true },
    game: String
});

const Player = module.exports = mongoose.model("Player", playerSchema);