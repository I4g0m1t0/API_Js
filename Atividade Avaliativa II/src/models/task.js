const { db, Sequelize } = require('../config/database');
const User = require('./user');
const Project = require('./project');

const Task = db.define('tasks', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});

// Relacionamentos
Task.belongsTo(Project, {
    foreignKey: 'projetoId',
    as: 'projeto'
});

Task.belongsTo(User, {
    foreignKey: 'usuarioId',
    as: 'usuario'
});

module.exports = Task;