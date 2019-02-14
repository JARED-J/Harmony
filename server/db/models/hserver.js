const Sequelize = require('sequelize')
const db = require('../db')

const Hserver = db.define('hserver', {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  adminId: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false
  }
})

module.exports = Hserver
