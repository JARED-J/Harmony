const Sequelize = require('sequelize')
const db = require('../db')

const Hserver_users = db.define('hserver_users')

module.exports = Hserver_users
