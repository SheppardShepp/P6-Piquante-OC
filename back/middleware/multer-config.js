const multer = require("multer");

// les différent format d'image prise en charge
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

// mise en place du stockage des fichiers image des sauces
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {

    // je modifie les intitulé des images pour supprimé les espaces
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    //je formate le nom du fichier
    callback(null, name + Date.now() + "." + extension);
  },
});

module.exports = multer({ storage: storage }).single("image");
