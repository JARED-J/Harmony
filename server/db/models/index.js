const User = require('./user')
const Hserver = require('./hserver')
const Tchannel = require('./tchannel')
const Message = require('./message')
const Hserver_users = require('./Hserver_users')

// RELATIONS
Hserver.hasMany(Tchannel)
Hserver.belongsToMany(User, {through: 'hserver_users'})
User.belongsToMany(Hserver, {through: 'hserver_users'})
Tchannel.belongsTo(Hserver)
Message.belongsTo(Tchannel)
Message.belongsTo(User)

module.exports = {
  User,
  Hserver,
  Tchannel,
  Message,
  Hserver_users
}
