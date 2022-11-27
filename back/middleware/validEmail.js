function validEmail(mail) { 
  const regex = new RegExp("^[a-zA-Z0-9_.-]+@{1}[a-zA-Z.-_]+[.]{1}[a-z]{2,10}$");
  return regex.test(mail);
}

module.exports = (req, res, next) => {
  if( validEmail(req.body.email) ){
    next();
  }else{
    return res.status(400).json({ message: `Ce n'ai pas une adresse mail valide` })
  }
}