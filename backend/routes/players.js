const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Player = require('../models/player');



// get all players 
router.get('/', function (req, res) {
    Player.find(function (err, result) {
        if (err) res.send(err);
        else res.json(result);
    });
});

// create new player
router.post('/', function (req, res) {
    const newPlayer = new Player({
        name: req.body.name,
        ranking: req.body.ranking,
        time: req.body.time,
        score: req.body.score,
        status: req.body.status,
        game: req.body.game
    });
    newPlayer.save(function (err, updatedPlayer) {
        if (!err) {
            res.json(updatedPlayer);
        } else {
            res.send(err);
        }
    });
});

// delete all players
router.delete('/', function (req, res) {
    Player.deleteMany(function (err, deletedPlayer) {
        if (!err) {
            res.json(deletedPlayer);
        } else {
            res.send(err);
        }
    });
});

// get player by id
router.get('/:id', function (req, res) {
    Player.findById({ _id: req.params.id }, function (err, foundPlayer) {
        if (foundPlayer) {
            res.json(foundPlayer);
        } else {
            res.send("Player not found!");
        }
    });
});


// update player by id using put
router.put('/:id', function (req, res) {
    Player.update({ _id: req.params.id },
        {
            name: req.body.name,
            ranking: req.body.ranking,
            time: req.body.time,
            score: req.body.score,
            status: req.body.status,
            game: req.body.game
        }, { overwrite: true }, function (err, docs) {
            if (!err) {
                res.json(docs);
            } else {
                res.send(err);
            }
        });
});


// update player by id using patch
router.patch(function (req, res) {
    Player.update({ _id: req.params.id }, { $set: req.body }, function (err, docs) {
        if (!err) {
            res.json(docs);
        } else {
            res.send(err);
        }
    });
});


//delete player by id
router.delete(function (req, res) {
    Player.remove({ _id: req.params.id }, function (err, docs) {
        if (docs) {
            res.json(docs);
        }
        else res.send(err);
    })
})


















module.exports = router;