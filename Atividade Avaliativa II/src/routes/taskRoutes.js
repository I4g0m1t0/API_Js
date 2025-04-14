const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Criação de tarefa: POST /api/tasks
router.post('/', taskController.createTask);

// Listagem de tarefas: GET /api/tasks
router.get('/', taskController.getAllTasks);

// Busca de tarefa por ID: GET /api/tasks/:id
router.get('/:id', taskController.getTaskById);

// Atualização de tarefa: PUT /api/tasks/:id
router.put('/:id', taskController.updateTask);

// Remoção de tarefa: DELETE /api/tasks/:id
router.delete('/:id', taskController.deleteTask);

module.exports = router;
