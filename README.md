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


## ⚡ Pacotes npm Utilizados

### bcrypt@5.1.1
- **Descrição**: Biblioteca para hashing de senhas, aumentando a segurança das credenciais dos usuários.
- **Uso**: Utilizado para criptografar senhas antes de armazená-las no banco de dados.
- **Instalação**: `npm install bcrypt@5.1.1`

### dotenv@16.4.7
- **Descrição**: Carrega variáveis de ambiente a partir de um arquivo `.env`.
- **Uso**: Utilizado para gerenciar configurações sensíveis, como credenciais de banco de dados e chaves secretas.
- **Instalação**: `npm install dotenv@16.4.7`

### express@4.21.2
- **Descrição**: Framework web para Node.js, facilitando a criação de APIs e aplicações web.
- **Uso**: Utilizado para definir rotas e middleware para a aplicação.
- **Instalação**: `npm install express@4.21.2`

### jsonwebtoken@9.0.2
- **Descrição**: Implementação de JWT (JSON Web Token) para autenticação.
- **Uso**: Utilizado para gerar e verificar tokens JWT para autenticação de usuários.
- **Instalação**: `npm install jsonwebtoken@9.0.2`

### mysql2@2.3.3
- **Descrição**: Driver MySQL para Node.js.
- **Uso**: Utilizado para conectar e interagir com o banco de dados MySQL.
- **Instalação**: `npm install mysql2@2.3.3`

### sequelize@6.37.7
- **Descrição**: ORM (Object-Relational Mapping) para Node.js, simplificando a interação com bancos de dados SQL.
- **Uso**: Utilizado para definir modelos e realizar operações no banco de dados.
- **Instalação**: `npm install sequelize@6.37.7`

## 🚀 Instalação e Execução

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/I4g0m1t0/API_Js.git
   cd API_Js

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
      ├── Nome_Da_Pasta
      |   ├── src
      |   │   ├── config
      |   │   │   └── database.js
      |   │   ├── controllers
      |   │   │   ├── userController.js
      |   │   │   ├── projectController.js
      |   │   │   └── taskController.js
      |   │   ├── models
      |   │   │   ├── project.js
      |   │   │   ├── task.js
      |   │   │   └── user.js
      |   │   ├── routes
      |   │   │   ├── authRoutes.js
      |   │   │   ├── projectRoutes.js
      |   │   │   ├── taskRoutes.js
      |   │   │   └── userRoutes.js
      |   └── server.js
      ├── .env
      ├── package.json
      └── README.md
```
## 📄 Documentação
Para mais detalhes sobre os endpoints disponíveis, consulte a documentação da API ou utilize ferramentas como o Postman para explorar os endpoints.

