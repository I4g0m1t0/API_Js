const Task = require('../models/task');

module.exports = {
  // Criação de tarefa: POST /api/tasks
  async createTask(req, res) {
    try {
      const { titulo, status, projetoId, usuarioId } = req.body;

      // Validação básica: todos os campos são obrigatórios
      if (!titulo || !status || !projetoId || !usuarioId) {
        return res.status(400).json({ error: 'Os campos título, status, projetoId e usuarioId são obrigatórios.' });
      }

      const task = await Task.create({ titulo, status, projetoId, usuarioId });
      res.status(201).json({ message: 'Tarefa criada com sucesso!', task });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar tarefa.', details: err });
    }
  },

  // Listagem de todas as tarefas: GET /api/tasks
  async getAllTasks(req, res) {
    try {
      const tasks = await Task.findAll({
        include: ['projeto', 'usuario']
      });
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao listar tarefas.', details: err });
    }
  },

  // Buscar tarefa por ID: GET /api/tasks/:id
  async getTaskById(req, res) {
    try {
      const { id } = req.params;
      const task = await Task.findByPk(id, {
        include: ['projeto', 'usuario']
      });
      if (!task) return res.status(404).json({ error: 'Tarefa não encontrada.' });
      res.json(task);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar tarefa.', details: err });
    }
  },

  // Atualização de tarefa: PUT /api/tasks/:id
  async updateTask(req, res) {
    try {
      const { id } = req.params;
      const { titulo, status, projetoId, usuarioId } = req.body;
      
      if (!titulo || !status || !projetoId || !usuarioId) {
        return res.status(400).json({ error: 'Os campos título, status, projetoId e usuarioId são obrigatórios.' });
      }

      const task = await Task.findByPk(id);
      if (!task) return res.status(404).json({ error: 'Tarefa não encontrada.' });

      task.titulo = titulo;
      task.status = status;
      task.projetoId = projetoId;
      task.usuarioId = usuarioId;

      await task.save();
      res.json({ message: 'Tarefa atualizada com sucesso!', task });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao atualizar tarefa.', details: err });
    }
  },

  // Remoção de tarefa: DELETE /api/tasks/:id
  async deleteTask(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Task.destroy({ where: { id } });
      if (!deleted) return res.status(404).json({ error: 'Tarefa não encontrada.' });
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: 'Erro ao remover tarefa.', details: err });
    }
  }
};
