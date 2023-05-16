const express = require("express");
const path = require("path");
const Player = require("./models/player");
const {request} = require("express");
const Board = require("./models/board.js");
const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (request, response) => {
  response.render("index");
});

app.post("/game", (req, res) => {
  const form = req.body;
  console.log(form);
  const player = new Player();
  player.pseudo = form.pseudo;

  // const game = new Game();

  res.json(player);
  res.redirect("/game/" + "TEST");
});

app.get("/game/:id", (request, response) => {
  const board = Board.describe();
  response.render("game", {board: board});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

/*

- Créer un formulaire de connexion (pseudo) + gameID (optionnel)
- Créer une route POST /game qui va créer un joueur et le rediriger vers la route /game/:id (selon si gameID est renseigné ou non)
- Créer une route GET /game/:id qui va afficher le jeu

- Créer une route POST /game/:id/turn qui va recevoir les pions joués par le joueur et les enregistrer dans la partie si valides
- Créer une route GET /game/:id/turn qui va afficher le jeu avec les pions joués par le joueur


 */
