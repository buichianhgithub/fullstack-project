const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Game = require('../models/game');


// getAllGames
router.get('/',(req,res)=>{
    Game.find((err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.json(result);
        }
    });
});

module.exports = router;