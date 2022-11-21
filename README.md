## Contexte du projet

Piquante se dédie à la création de sauces épicées dont les recettes sont gardées
secrètes. Pour tirer parti de son succès et générer davantage de buzz, l'entreprise
souhaite créer une application web dans laquelle les utilisateurs peuvent ajouter
leurs sauces préférées et liker ou disliker les sauces ajoutées par les autres.

## Le projet et son fonctionnement

Les technologies utilisées:
- pour le front: javascript utilisant Angular.
- pour le back: javascript avec Node.js et Express et mongodb pour la base de donnée.


Rendez-vous dans les fichiers "package.json" pour prendre connaissance des outils utilisés.

## La partie FRONTEND

Pour faire fonctionner la partie front, il faut installer le package npm
Pour cela ouvrer le terminal et entrer les commandes suivantes:

- "cd front"
- "npm install"
- "npm start"

Celui est accessible a l'adresse : http://localhost:4200/

## La partie BACKEND

Pour faire fonctionner la partie back il faut:
- Créer un dossier "images" (sans majuscule)
- Créer un fichier ".env"
    - y créer 2 variables: 
        - "BDD_URL =" + <!-- votre lien mongodb pour la base de donnée de l'application -->
        - "SECRET_TOKEN =" + <!-- une valeur en guise de clé secrète --> 
- Installer le package npm.
Pour cela ouvrer le terminal et entrer les commandes suivantes:

- "cd back"
- "npm install"
- "npm start"

Celui est accessible a l'adresse : http://localhost:3000/
