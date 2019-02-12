const Sequelize = require('sequelize')
const db = require('../db')

const Tchannel = db.define('tchannel', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Tchannel
