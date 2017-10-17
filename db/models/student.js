const Sequelize = require('sequelize');
const db = require('../')

const Student = db.define('student', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        },
        unique: true
    }
});

module.exports = Student;