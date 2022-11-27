const schemaValidateur = require('../models/modPass');

//j'importe le schema créer et l'exporte pour l'utilisation des routes
module.exports = (req, res, next) => {
    if (schemaValidateur.validate(req.body.password)) {
        next();
    } else {
        return res.status(400).json({ message: 
            `Le mot de passe est incorrect. Il doit comporter 5 a 20 caractere comprenant au moin 1 chiffre,
             1 symbole(@$!%*?&) ${schemaValidateur.validate('req.body.password', { list: true })} ` })
    }
}