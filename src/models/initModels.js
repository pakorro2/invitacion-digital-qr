const Users = require('./users.models')
const Invitatios = require('./invitations.models')
const RecoveryPasswords = require('./recoveryPasswords.models')

const initModels = () => {
  //?Users - Invitatios
  Users.hasMany(Invitatios)
  Invitatios.belongsTo(Users)

  //? FK = RecoveryPasswords
  Users.hasMany(RecoveryPasswords)
  RecoveryPasswords.belongsTo(Users)
}

module.exports = initModels