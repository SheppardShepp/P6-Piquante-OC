//importation des outils pour l'utilisation du serveur
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

//importation des routes
const sauceRoutes = require("./routes/sauces");
const userRoutes = require("./routes/user");

//connection avec la base de donnée
mongoose
  .connect(process.env.BDD_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

//mise en place de l'infrastructure d'express pour le serveur
const app = express();

app.use(morgan("dev"));

app.use(cors());

app.use(express.json());

app.use("/api/sauces", sauceRoutes);
app.use("/api/auth", userRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
