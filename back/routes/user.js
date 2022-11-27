const express = require("express");
const router = express.Router();

//je relie mes routes au middleware
const validPass = require("../middleware/validPass");
const validEmail = require("../middleware/validEmail");

//je relie mes routes au controllers
const userCtrl = require("../controllers/user");

//route pour la creation et connection d'utilisateur
router.post("/signup", validEmail, validPass, userCtrl.signup);
router.post("/login", validEmail, validPass, userCtrl.login);

module.exports = router;
