const { db, Sequelize } = require('../config/database');

const User = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = User;
