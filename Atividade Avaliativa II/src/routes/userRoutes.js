const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para cadastrar usuário
router.post('/', userController.createUser); // POST /api/users

// Rota para listar usuários
router.get('/', userController.getAllUsers); // GET /api/users

// Rota para atualizar usuário
router.put('/:id', userController.updateUser); // PUT /api/users/:id

// Rota para remover usuário
router.delete('/:id', userController.deleteUser); // DELETE /api/users/:id

module.exports = router;
