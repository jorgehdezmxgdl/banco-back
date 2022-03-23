const models = require("../models");
const jwt = require('jsonwebtoken');

const Login = (req, res) => {
   const clave = req.params.clave;
   const passw = req.params.passw;
   models.Login.findOne({ where: { username: clave, password: passw} }).then((user) => {
      if (!user) 
         return res.status(400).send( { status: 'error', message: "Datos incorrectos" });
      return res.status(200).send({ status: 'ok', message: 'ok'}); 
   }).catch((err) => console.error(err)); 
}

const Prueba = (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return res.status(200).send({status: 'ok', message: 'todo bien!'});
}

const Token = (req, res) => {
    const token = jwt.sign({user_id: 1, name: 'jorge', access: true},
    'Gydnfdk57173$#120', {expiresIn: 20});
    return res.status(200).send(token);
}

const ValidaToken = (req, res) => {
   const mtoken = req.params.mtoken
   /*
   jwt.verify(mtoken, 'Gydnfdk57173$#120', function(err, decoded) {
      if (err)  {
         return res.status(400).send({status: 'error', message: err})
      }
      return res.status(200).send({status: 'ok', message: decoded})
    });
    */
   try {
      jwt.verify(mtoken, 'fdsfdsf$#120')
   } catch (e) {
      console.log(e)
      if (e instanceof jwt.TokenExpiredError) {
         return res.status(400).send({status: 'error', message: 'token ha expirado'})
      }
      if (e instanceof jwt.JsonWebTokenError) {
         return res.status(400).send({status: 'error', message: 'token distintos'})
      }
      return res.status(400).send({status: 'error', message: 'error general'})
    }
   console.log("Todo bien!"); 
   return res.status(200).send({status: 'ok', message: 'tu token esta vigente!'}) 
}

module.exports ={ Login, Prueba, Token, ValidaToken }