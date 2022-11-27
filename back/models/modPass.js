const passValidator = require('password-validator');

// Création du schema
var schemaValidateur = new passValidator();

// je paramétre le schéma
schemaValidateur
.is().min(5)                        //caratère minimum
.is().max(20)                       //caratère maximum
.has().uppercase()                  //doit contenir des minuscules
.has().lowercase()                  //doit contenir des minuscules
.has().digits(1)                    //doit contenir 1 chiffre minimum
.has().not().spaces()               //doit contenir 0 espace
.has().symbols([1], ["@$!%*?&"])    //dois contenir au moin 1 caractère spécial

module.exports = schemaValidateur;