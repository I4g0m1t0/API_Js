# 📌 API de Gerenciamento de Projetos, Tarefas e Usuários

Esta é uma API RESTful desenvolvida com Node.js, Express e Sequelize, conectada a um banco de dados MySQL. Ela permite o gerenciamento de usuários, projetos e tarefas, com autenticação via JWT.

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- MySQL
- JWT (JSON Web Token)
- bcrypt
- Postman

## 🚀 Instalação e Execução

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio

2. **Instale as dependências:**
  npm install

3. **Configure o banco de dados:**
- Certifique-se de que o MySQL está rodando (pode utilizar o XAMPP).
- Crie um banco de dados com o nome desejado (por exemplo, atividade_js).
- Configure as variáveis de ambiente no arquivo .env:

   ```ini
  DB_HOST=localhost
  DB_USER=seu_usuario
  DB_PASSWORD=sua_senha
  DB_NAME=atividade_js
  DB_DIALECT=mysql
  JWT_SECRET=sua_chave_secreta

4. **Execute a aplicação:**
   ```bash
    npm start
A aplicação estará disponível em http://localhost:3000.

## 🔐 Autenticação
A autenticação é realizada via JWT. Após o login, um token é retornado e deve ser utilizado nas requisições subsequentes que requerem autenticação.

### 📬 Utilizando o Postman
1. **Realize o cadastro de um usuário:**

- Endpoint: POST /api/auth/register

- Body:
  ```json
  {
    "nome": "João Silva",
    "email": "joao@example.com",
    "senha": "123456"
  }

2. **Realize o login:**

- Endpoint: POST /api/auth/login

- Body:

  ```json
  {
    "email": "joao@example.com",
    "senha": "123456"
  }
- Resposta:

  ```json
  {
    "token": "seu_token_jwt"
  }
3. **Utilize o token nas requisições protegidas:**

- Vá até a aba "Authorization" no Postman.

- Selecione o tipo "Bearer Token".

- Insira o token obtido no login.

4. **Crie um projeto:**

- Endpoint: POST /api/projects

- Body:

  ```json
  {
    "nome": "Projeto Exemplo",
    "descricao": "Descrição do projeto"
  }

5. **Crie uma tarefa:**

- Endpoint: POST /api/tasks

- Body:

  ```json
  {
    "titulo": "Tarefa Exemplo",
    "status": "pendente",
    "projetoId": 1,
    "usuarioId": 1
  }

## 📁 Estrutura do Projeto
 ```pgsql
      ├── src
      │   ├── config
      │   │   └── database.js
      │   ├── controllers
      │   │   ├── authController.js
      │   │   ├── projectController.js
      │   │   └── taskController.js
      │   ├── models
      │   │   ├── index.js
      │   │   ├── project.js
      │   │   ├── task.js
      │   │   └── user.js
      │   ├── routes
      │   │   ├── authRoutes.js
      │   │   ├── projectRoutes.js
      │   │   └── taskRoutes.js
      │   └── server.js
      ├── .env
      ├── package.json
      └── README.md
```
## 📄 Documentação
Para mais detalhes sobre os endpoints disponíveis, consulte a documentação da API ou utilize ferramentas como o Postman para explorar os endpoints.

