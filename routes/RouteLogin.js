const express = require('express');
const router = express.Router();

const loginController = require('../controller/LoginController');

router.get('/api/v1/login', loginController.Login)

module.exports = router

