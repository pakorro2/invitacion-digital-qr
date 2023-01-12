const router = require('express').Router()

const passportJWT = require('../middlewares/auth.middleware')
const invitationServices = require('./invitations.services')


router.route('/')
  .get(passportJWT.authenticate('jwt', { session: false }), invitationServices.getAllInvitations)
  .post(passportJWT.authenticate('jwt', { session: false }), invitationServices.postInvitation)

router.route('/:id')
  .get(passportJWT.authenticate('jwt', { session: false }), invitationServices.getInvitationsById)
  .delete(passportJWT.authenticate('jwt', { session: false }), invitationServices.deleteInvitation)


module.exports = router