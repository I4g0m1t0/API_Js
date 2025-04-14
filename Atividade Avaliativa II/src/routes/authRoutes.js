const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para login
router.post('/login', userController.login); // POST /api/auth/login

module.exports = router;
