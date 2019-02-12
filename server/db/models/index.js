const User = require('./user')
const Hserver = require('./hserver')
const Tchannel = require('./tchannel')
const Message = require('./message')

// RELATIONS
Hserver.hasMany(User)
Hserver.hasMany(Tchannel)
Tchannel.belongsTo(Hserver)
Message.belongsTo(Tchannel)
Message.belongsTo(User)

module.exports = {
  User,
  Hserver,
  Tchannel,
  Message
}
