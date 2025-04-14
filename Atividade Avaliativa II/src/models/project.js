const { db, Sequelize } = require('../config/database');

const Project = db.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    freezeTableName: true // evita que Sequelize transforme "projects" em "projectses"
});

module.exports = Project;