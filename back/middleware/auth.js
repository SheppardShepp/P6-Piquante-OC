const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    //je decrypte le token, puis cache la clé secrete grace au module "dotenv"
    const tokenDecrypt = jwt.verify(token, process.env.SECRET_TOKEN);
    const userId = tokenDecrypt.userId;
    req.auth = {
      userId: userId,
    };
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};
