const express = require("express");
const router = express.Router();

//je relie mes routes au controllers
const userCtrl = require("../controllers/user");

//route pour la creation et connection d'utilisateur
router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
