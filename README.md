<h1 align="center">
P6-Piquante-OC</h1>

<div align="center"><img height="100" src="https://i31.servimg.com/u/f31/13/52/99/79/piquan14.png"></div>

## 📝 Sommaires

- [Présentation du projet](#présentation)
- [Aperçu du projet](#projet)
- [Spécification du projet](#specification)
- [Utilisation de la parti Front](#utilisation)
- [Installation de l'API](#api)
- [Création d'un compte utilisateur](#utilisateur)

## 💭 Petit mot de présentation <a name = "présentation"></a>

Ce projet a eu pour but d'apprendre la mise en place d'un API REST sécurisé en utilisant les technologies de Node.js et Express, ainsi que la mise en place et l'utilisation d'une base de données avec MongoDB. Le tout en utilisant l'application Postman afin de faire les tests nécessaires.
Pour cela l'on m'a fournis un site avec la partie front-end déjà mis en place avec Angular. J'avais donc plus qu'à faire la partie back-end en prenant soin de respecter les recommandations de l'OWASP.

---

## :movie_camera: Scénario du projet

Piquante se dédie à la création de sauces épicées dont les recettes sont gardées secrètes. Pour tirer parti de son succès et générer davantage de buzz, l'entreprise souhaite créer une application web dans laquelle les utilisateurs peuvent ajouter leurs sauces préférées et liker ou disliker les sauces ajoutées par les autres.

Lien des spécifications technique : [Spécifications-technique](https://drive.google.com/file/d/13gfqljkY-Zn5cbc-bwWNuCZYFn8h3pZM/view?usp=sharing)

---

### Langages à utilisés

- <img height="30" src="https://i31.servimg.com/u/f31/13/52/99/79/logo_h11.png"> HTML/CSS

- <img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"> Javascript

#### Les plateformes / frameworks / librairies

- <img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"> NodeJS

- <img height="30" src="https://i31.servimg.com/u/f31/13/52/99/79/1_xp-m10.png"> ExpressJS

- <img height="30" src="https://i31.servimg.com/u/f31/13/52/99/79/f4364410.png"> MongoDB

- <img height="30" src="https://i31.servimg.com/u/f31/13/52/99/79/postma10.png"> Postman

---

## ⛏️ Aperçu du projet <a name = "projet"></a>

Objectif : Construisez une API sécurisée.

Utilisation : <img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"> <img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"> <img height="30" src="https://i31.servimg.com/u/f31/13/52/99/79/1_xp-m10.png"> <img height="30" src="https://i31.servimg.com/u/f31/13/52/99/79/f4364410.png">

Aperçu :

<div align="center"><img height="300" src="https://i31.servimg.com/u/f31/13/52/99/79/piquan10.png"> <img height="300" src="https://i31.servimg.com/u/f31/13/52/99/79/piquan11.png"> <img height="300" src="https://i31.servimg.com/u/f31/13/52/99/79/piquan13.png"> <img height="300" src="https://i31.servimg.com/u/f31/13/52/99/79/piquan12.png"></div>

---

## :gear: Les Spécification du projets <a name = "specification"></a>

- Le mot de passe de l'utilisateur doit être haché.
- L'authentification doit être renforcée sur toutes les routes sauce requises.
- Les adresses électroniques dans la base de données sont uniques et un plugin Mongoose approprié est utilisé pour garantir leur unicité et signaler les erreurs.
- La sécurité de la base de données MongoDB (à partir d'un service tel que MongoDB Atlas) ne doit pas empêcher l'application de se lancer sur la machine d'un utilisateur.
- Un plugin Mongoose doit assurer la remontée des erreurs issues de la base de données.

---

## :gear: Utilisation de la partie Front <a name = "utilisation"></a>

Cloner le dépôt git du projet via un éditeur de code ou le télécharger puis le décompresser sur votre machine. Une fois le dossier ouvert avec un éditeur de code (comme VSCode), ouvrir et saisir dans le terminal les commandes suivante :

- "cd front"
- "npm install"
- "npm start"

Celui est accessible à l'adresse : http://localhost:4200/

## :gear: Installation de l'API <a name = "api"></a>

Pour faire fonctionner la partie back-end il faut pour cela :

Dans le dossier back, il faut créer :

- un dossier "images" (sans majuscule)
- un fichier ".env"
  - dans celui-ci y créer 2 variables:
    - "BDD_URL =" + "votre lien mongodb pour la base de donnée de l'application"
    - "SECRET_TOKEN =" + "une valeur en guise de clé secrète"
- Installer le package npm.
  Pour cela ouvrer le terminal et entrer les commandes suivantes:

  - "cd back"
  - "npm install"
  - "npm start"

Celui est accessible à l'adresse : http://localhost:3000/

## :computer: Pour la création d'un compte utilisateur <a name = "utilisateur"></a>

Pour la création d'un compte utilisateur il faut respecter certain critère qui sont composé de:

Pour l'email:

- ne pas contenir d'espace
- Avant le "@" peux contenir des majuscules, minuscules, chiffres et 1 caractère spéciaux parmi " -\_. "
- doit contenir un "@"
- Apres le "@" peux contenir des majuscules, minuscules, chiffres et 1 caractère spéciaux parmi " -\_. "
- doit finir par ".fr", ".com" ou autre.

Pour le mot de passe:

- doit être composé de 5 à 20 caractères.
- doit être composé de minuscule et majuscule.
- doit être composé d'un chiffre.
- ne pas contenir d'espace.
- doit être composé d'au moins 1 caractère spécial " @$!%\*?& "
