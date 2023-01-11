const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Users = db.define('users', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 50]
    }
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 50]
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    },
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apartmentNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true //Quitar si se desea que mas de uno inquilino por departamento tenga cuenta.
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'normal'
  }
})

module.exports = Users