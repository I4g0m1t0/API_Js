require('dotenv').config();
const express = require('express');
const app = express();
const { db } = require('./config/database');

// Importa os routers
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');

// Middleware para converter o body da requisição em JSON
app.use(express.json());

// Monta as rotas
app.use('/api/users', userRoutes);      // Usuários e cadastro
app.use('/api/auth', authRoutes);         // Login e autenticação
app.use('/api/projects', projectRoutes);  // Operações de projetos
app.use('/api/tasks', taskRoutes);        // Operações de tarefas

// Sincroniza as tabelas e inicia o servidor
db.sync()
  .then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch(err => {
    console.error("Erro ao sincronizar com o banco:", err);
  });
