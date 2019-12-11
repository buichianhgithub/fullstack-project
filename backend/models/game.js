const mongoose = require('mongoose');
const config = require('../config/database');


// create gameSchema and Game model
const gameSchema = new mongoose.Schema({
    title: String,
    platform: String,
    genre: String,
    rating: String,
    publisher: String,
    release: String,
    status: String,

});
const Game = module.exports = mongoose.model("Game", gameSchema);
