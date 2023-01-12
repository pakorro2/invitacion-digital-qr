const invitationsControllers = require('./invitations.controllers')

const getAllInvitations = (req, res) => {
  const id = req.user.id
  invitationsControllers.findAllInvitations(id)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({ message: err.message })
    })
}
const getInvitationsById = (req, res) => {
  const id = req.user.id
  invitationsControllers.findInvitationById(id)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({ message: err.message })
    })
}



const postInvitation = (req, res) => {
  const userId = req.user.id
  const { guestName, admissionDataAndTime, admissionIsValid } = req.body
  invitationsControllers.createInvitation({ guestName, admissionDataAndTime, admissionIsValid, userId })
    .then(data => {
      res.status(201).json(data)
    })
    .catch(err => {
      res.status(400).json({
        messages: err.message, fields: {
          guestName: 'Nombre completo del invitado',
          admissionDataAndTime: 'Fecha y hora de llegada del invitado',
          admissionIsValid: 'Hasta que fecha es valida la invitacion'
        }
      })
    })
}

const deleteInvitation = (req, res) => {
  const id = req.params.id
  invitationsControllers.removeInvitation(id)
    .then(data => {
      if (data) {
        res.status(204).json()
      } else {
        res.status(404).json({ message: `Invalid ID` })
      }
    })
    .catch(err => {
      res.status(400).json({ message: err.message })
    })

}

module.exports = {
  getAllInvitations,
  getInvitationsById,
  postInvitation,
  deleteInvitation
}