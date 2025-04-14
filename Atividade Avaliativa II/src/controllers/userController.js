// src/controllers/userController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const saltRounds = 10;
const secret = process.env.JWT_SECRET; // Chave definida no .env

module.exports = {
  // Cadastro de usuário: POST /api/users
  async createUser(req, res) {
    try {
      const { nome, email, senha } = req.body;

      // Validação básica
      if (!nome || !email || !senha) {
        return res.status(400).json({ error: 'Todos os campos (nome, email, senha) são obrigatórios. saSSDASDAD' });
      }

      const senhaHash = await bcrypt.hash(senha, saltRounds);
      const user = await User.create({ nome, email, senha: senhaHash });
      res.status(201).json({ message: 'Usuário criado com sucesso!', user });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar usuário.', details: err });
    }
  },

  // Listagem de todos os usuários: GET /api/users
  async getAllUsers(req, res) {
    try {
      const users = await User.findAll({ attributes: { exclude: ['senha'] } });
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao listar usuários.' });
    }
  },

  // Atualização de usuário: PUT /api/users/:id
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { nome } = req.body;

      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });

      user.nome = nome;
      await user.save();
      res.json({ message: 'Usuário atualizado com sucesso!', user });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao atualizar usuário.' });
    }
  },

  // Remoção de usuário: DELETE /api/users/:id
  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const deleted = await User.destroy({ where: { id } });

      if (!deleted) return res.status(404).json({ error: 'Usuário não encontrado.' });
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: 'Erro ao remover usuário.' });
    }
  },

  // Login de usuário: POST /api/login  
  async login(req, res) {
    try {
      const { email, senha } = req.body;

      if (!email || !senha) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
      }

      const user = await User.findOne({ where: { email } });
      if (!user) return res.status(401).json({ error: 'Credenciais inválidas.' });

      const senhaValida = await bcrypt.compare(senha, user.senha);
      if (!senhaValida) return res.status(401).json({ error: 'Credenciais inválidas.' });

      // Gera o token JWT sem expiração definida
      const token = jwt.sign({ id: user.id, email: user.email }, secret);

      res.json({
        message: 'Login realizado com sucesso!',
        token
      });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao fazer login.', details: err });
    }
  }
};
