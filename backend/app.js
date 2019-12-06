const Mongoose = require("mongoose");
const BodyParser = require("body-parser");
const Express = require("express");
const Ejs = require("ejs");
const Schema = require("mongoose").Schema;

// creates an application instance using express
const app = Express();

// middleware
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// use static public folder
app.use(Express.static("public"));

// connect local mongodb instance
Mongoose.connect("mongodb://localhost:27017/projectDB", { useNewUrlParser: true, useUnifiedTopology: true });


// create gameSchema and Game model
const gameSchema = Schema({
    title: String,
    year: String,
    status: String,
});
const Game = Mongoose.model("Game", gameSchema);


// create playerSchema and Player model
const playerSchema = Schema({
    name: String,
    ranking: Number,
    score: Number,
    unavailable: Boolean,
    game: String
});
const Player = Mongoose.model("Player", playerSchema);

// test connection
app.listen(3000, function () {
    console.log("Server started on port 3000");
})

// get all games
app.route("/games").get(function (request, response) {
    Game.find(function (err, foundGames) {
        if (foundGames) {
            response.send(foundGames);
        } else {
            response.send(err);
        }
    })
})

// chained route handlers using express
app.route("/players")

    // get all players 
    .get(function (request, response) {
        Player.find(function (err, foundPlayers) {
            response.send(foundPlayers);
        });
    })

    // create new player
    .post(function (request, response) {
        const newPlayer = new Player({
            name: request.body.name,
            ranking: request.body.ranking,
            score: request.body.score,
            unavailable: request.body.unavailable,
            game: request.body.game
        });
        newPlayer.save(function (err) {
            if (!err) {
                response.send("Successfully added to database!");
            } else {
                response.send(err);
            }
        });
    })

    // delete all players
    .delete(function (request, response) {
        Player.deleteMany(function (err) {
            if (!err) {
                response.send("Successfully delete all players!");
            } else {
                response.send(err);
            }
        })
    });


app.route("/players/:id")

    // get player by id
    .get(function (request, response) {
        Player.findById({ _id: request.params.id }, function (err, foundPlayer) {
            if (foundPlayer) {
                response.send(foundPlayer);
            } else {
                response.send("Player not found!");
            }
        })
    })

    // update player by id using put
    .put(function (request, response) {
        Player.update({ _id: request.params.id },
            {
                name: request.body.name,
                ranking: request.body.ranking,
                score: request.body.score,
                unavailable: request.body.unavailable,
                game: request.body.game
            }, { overwrite: true }, function (err) {
                if (!err) {
                    response.send("Update successfully!");
                } else {
                    response.send(err);
                }
            })
    })

    // update player by id using patch
    .patch(function (request, response) {
        Player.update({ _id: request.params.id }, { $set: request.body }, function (err) {
            if (!err) {
                response.send("Update successfully");
            } else {
                response.send(err)
            }
        })
    })

    //delete player by id
    .delete(function (request, response) {
        Player.remove({ _id: request.params.id }, function (err, foundPlayer) {
            if (foundPlayer) {
                response.send("Delete succcessfully!");
            }
            else response.send(err);
        })
    })