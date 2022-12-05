const Sauce = require("../models/modSauce");
const fs = require("fs");

// -------------------------------------------------------------------
// ----------- fonction d'affichage de l'ensemble des objets ---------

exports.getAllSauces = (req, res, next) => {
  Sauce.find()
    .then((sauces) => {
      res.status(200).json(sauces);
    })
    .catch((error) => res.status(400).json({ error }));
};

// -------------------------------------------------------------------
// ----------------- fonction d'affichage d'un objet -----------------

exports.getOneSauce = (req, res, next) => {
  Sauce.findOne({
    _id: req.params.id,
  })
    .then((sauce) => {
      res.status(200).json(sauce);
    })
    .catch((error) => {
      res.status(404).json({
        error,
      });
    });
};

// -------------------------------------------------------------------
// --------------------- fonction de creation ------------------------

exports.createSauce = (req, res, next) => {
  const sauceObject = JSON.parse(req.body.sauce);
  delete sauceObject._id;
  delete sauceObject._userId;
  const sauce = new Sauce({
    ...sauceObject,
    userId: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
    likes: 0,
    dislikes: 0,
    usersLiked: [],
    usersDisliked: [],
  });
  sauce
    .save()
    .then(() => {
      res.status(201).json({
        message: "Sauce créer avec succès",
      });
    })
    .catch((error) => res.status(400).json({ error }));
};

// -------------------------------------------------------------------
// ------------------- fonction de modification ----------------------

exports.modifySauce = (req, res, next) => {
  const sauceObject = req.file
    ? {
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  delete sauceObject._userId;
  Sauce.findOne({ _id: req.params.id })
    .then((sauce) => {
      if (sauce.userId != req.auth.userId) {
        res.status(401).json({ message: "Modification non autorisé" });
      } else {
        Sauce.updateOne(
          { _id: req.params.id },
          { ...sauceObject, _id: req.params.id }
        )
          .then(() => res.status(200).json({ message: "Objet modifié!" }))
          .catch((error) => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

// -------------------------------------------------------------------
// ------------------ fonction de suppression ------------------------

exports.deleteSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
    .then((sauce) => {
      if (sauce.userId != req.auth.userId) {
        res.status(401).json({ message: "Suppression non autorisé" });
      } else {
        const filename = sauce.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
          Sauce.deleteOne({ _id: req.params.id })
            .then(() => {
              res.status(200).json({ message: "Objet supprimé !" });
            })
            .catch((error) => res.status(401).json({ error }));
        });
      }
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

// -------------------------------------------------------------------
// ------------------- fonction du like/dislike ----------------------

exports.likeSauce = (req, res, next) => {
  const userId = req.body.userId;
  const sauceId = req.params.id;
  const like = req.body.like;

  Sauce.findOne({_id : sauceId})//je transforme la clé id en _id (ce qui correspond a la base de donnée)
    .then(thingSauce => {

      // ----------- LE LIKE ----------------
      //si dans [usersLiked] l'userId est false ET dans [usersDisliked] l'userId est false ET req.body.like = 1
      if (!thingSauce.usersLiked.includes(userId) && !thingSauce.usersDisliked.includes(userId)  && like === 1) {
        //alors j'incrémente dans la base de donné "likes" de +1 et [usersLiked] de userId de l'utilisateur
        Sauce.updateOne( {_id :sauceId}, {$inc: {likes: 1}, $push: {usersLiked: userId}})
        .then(() => res.status(201).json({ message: 'Like enregistré !' }))
        .catch((error) => res.status(401).json({ error }));
        } 
        else if (thingSauce.usersLiked.includes(userId) && like === 0) {
          Sauce.updateOne( {_id :sauceId}, {$inc: {likes:-1}, $pull: {usersLiked: userId}})
          .then(() => res.status(201).json({ message: 'Like éffacé !' }))
          .catch((error) => res.status(401).json({ error }));
        } 

        // ----------- LE DISLIKE ----------------
        else if (!thingSauce.usersLiked.includes(userId) && !thingSauce.usersDisliked.includes(userId)  && like === -1) {
          Sauce.updateOne( {_id :sauceId}, {$inc: {dislikes: 1}, $push: {usersDisliked: userId}})
          .then(() => res.status(201).json({ message: 'Dislike enregistré !' }))
          .catch((error) => res.status(401).json({ error }));
        } 
        else if (thingSauce.usersDisliked.includes(userId) && like === 0) {
          Sauce.updateOne( {_id :sauceId}, {$inc: {dislikes:-1}, $pull: {usersDisliked: userId}})
          .then(() => res.status(201).json({ message: 'Dislike éffacé !' }))
          .catch((error) => res.status(401).json({ error }));
        }
        else {
          res.status(201).json({ message: 'Choix déjà effectué !' })
        }
  })
  .catch(error => res.status(404).json({ error }));
    
}