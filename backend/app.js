const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const Schema = mongoose.Schema;

// creates an application instance using express
const app = express();

// // Port Number
// const port = process.env.PORT || 8080;

// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to Database ' + config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error ' + err);
});

// Cors middleware
app.use(cors());

// BodyParsermiddleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

const users = require('./routes/users');
const games = require('./routes/games');
const players = require('./routes/players');

app.use('/users', users);
app.use('/games', games);
app.use('/players', players);

// Index Route
app.get('/', (req, res) => {
    res.send('invaild endpoint');
});

// use static public folder
app.use(express.static("public"));

// connect local mongodb instance
mongoose.connect("mongodb://localhost:27017/projectDB", { useNewUrlParser: true, useUnifiedTopology: true });



const port = 3000;
// Start Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});












