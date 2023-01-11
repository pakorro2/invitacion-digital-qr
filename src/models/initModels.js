const Users = require('./users.models')
const Invitatios = require('./invitations.models')


const initModels = () => {
  //?Users - Invitatios
  Users.hasMany(Invitatios)
  Invitatios.belongsTo(Users)
}

module.exports = initModels