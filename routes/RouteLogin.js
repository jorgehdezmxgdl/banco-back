const express = require('express');
const router = express.Router();

const loginController = require('../controller/LoginController');

router.get('/api/v1/login', loginController.Login)
router.get('/api/v1/prueba', loginController.Prueba)
router.get('/api/v1/token', loginController.Token)
router.get('/api/v1/validatoken/:mtoken', loginController.ValidaToken)

module.exports = router

