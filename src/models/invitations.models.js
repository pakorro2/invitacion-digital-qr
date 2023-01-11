const { DataTypes } = require('sequelize')

const db = require('../utils/database')
const Users = require('../models/users.models')

const Invitations = db.define('invitations', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  guestName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 80]
    }
  },
  admissionDataAndTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  admissionIsValid: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      key: 'id',
      model: Users
    }
  }

})

module.exports = Invitations