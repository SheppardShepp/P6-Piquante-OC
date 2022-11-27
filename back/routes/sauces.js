const express = require("express");
const router = express.Router();

//je relie mes routes au middleware pour la gestion des images et de l'authentification
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");


//je relie mes routes au controllers
const sauceCtrl = require("../controllers/sauces");


//route pour la gestion des sauces
router.get("/", auth, sauceCtrl.getAllSauces);
router.get("/:id", auth, sauceCtrl.getOneSauce);
router.post("/", auth, multer, sauceCtrl.createSauce);
router.put("/:id", auth, multer, sauceCtrl.modifySauce);
router.delete("/:id", auth, sauceCtrl.deleteSauce);
router.post("/:id/like", auth, sauceCtrl.likeSauce);

module.exports = router;
