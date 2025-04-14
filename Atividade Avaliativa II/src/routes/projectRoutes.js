const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Criação de um novo projeto: POST /api/projects
router.post('/', projectController.createProject);

// Listagem de todos os projetos: GET /api/projects
router.get('/', projectController.getAllProjects);

// Atualização de um projeto específico: PUT /api/projects/:id
router.put('/:id', projectController.updateProject);

// Remoção de um projeto específico: DELETE /api/projects/:id
router.delete('/:id', projectController.deleteProject);

module.exports = router;
