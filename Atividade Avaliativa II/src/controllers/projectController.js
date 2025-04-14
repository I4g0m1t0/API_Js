// src/controllers/projectController.js
const Project = require('../models/project');

module.exports = {
  // Criação de projeto: POST /api/projects
  async createProject(req, res) {
    try {
      const { nome, descricao } = req.body;

      // Validação básica
      if (!nome) {
        return res.status(400).json({ error: 'O campo "nome" é obrigatório.' });
      }

      const project = await Project.create({ nome, descricao });
      res.status(201).json({ message: 'Projeto criado com sucesso!', project });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar projeto.', details: err });
    }
  },

  // Listagem de todos os projetos: GET /api/projects
  async getAllProjects(req, res) {
    try {
      const projects = await Project.findAll();
      res.json(projects);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao listar projetos.', details: err });
    }
  },

  // Atualização de projeto: PUT /api/projects/:id
  async updateProject(req, res) {
    try {
      const { id } = req.params;
      const { nome, descricao } = req.body;

      // Validação básica
      if (!nome) {
        return res.status(400).json({ error: 'O campo "nome" é obrigatório.' });
      }

      const project = await Project.findByPk(id);
      if (!project) {
        return res.status(404).json({ error: 'Projeto não encontrado.' });
      }

      project.nome = nome;
      project.descricao = descricao;
      await project.save();

      res.json({ message: 'Projeto atualizado com sucesso!', project });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao atualizar projeto.', details: err });
    }
  },

  // Remoção de projeto: DELETE /api/projects/:id
  async deleteProject(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Project.destroy({ where: { id } });

      if (!deleted) {
        return res.status(404).json({ error: 'Projeto não encontrado.' });
      }

      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: 'Erro ao remover projeto.', details: err });
    }
  }
};
