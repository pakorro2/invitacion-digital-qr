const Invitations = require('../models/invitations.models')

const uuid = require('uuid')

const findAllInvitations = async (id) => {
  const data = await Invitations.findAll({
    where: {
      userId: id
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt']
    },
  })
  return data
}

const findInvitationById = async (id) => {
  const data = await Invitations.findOne({
    where: {
      id: id
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt']
    },
  })
  return data
}

const createInvitation = async (obj) => {
  const data = await Invitations.create({
    id: uuid.v4(),
    guestName: obj.guestName,
    admissionDataAndTime: obj.admissionDataAndTime,
    admissionIsValid: obj.admissionIsValid,
    userId: obj.userId,
  })
  return data
}


const removeInvitation = async (id) => {
  const data = await Invitations.destroy({
    where: {
      id: id
    }
  })
  return data
}

module.exports = {
  findAllInvitations,
  findInvitationById,
  createInvitation,
  removeInvitation
}