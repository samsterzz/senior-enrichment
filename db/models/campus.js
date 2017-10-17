const Sequelize = require('sequelize');
const db = require('../')

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        defaultValue: '/images/default.jpg'
    }
});

module.exports = Campus;