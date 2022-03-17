const models = require("../models");

const Login = (req, res) => {
   models.Login.findOne({ where: { username: "gerente1", password: "1234563"} }).then((user) => {
      if (!user) 
         return res.status(400).send( { status: 'error', message: "Datos incorrectos" });
      return res.status(200).send({ status: 'ok', message: 'ok'}); 
   }).catch((err) => console.error(err)); 
}

module.exports ={ Login }