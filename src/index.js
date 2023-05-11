const express = require('express');
const path = require("path");
const Player = require("./models/player");
const {request} = require("express");
const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.render("index");
});

app.post("/game", (req, res) => {
  const form = req.body;
  console.log(form);
  const player = new Player();
  player.pseudo = form.pseudo;

 // const game = new Game();


  res.json(player);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});