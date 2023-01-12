//? Dependencias
const express = require('express')
const cors = require('cors')

//? Archivos
const config = require('../config')
const db = require('./utils/database')
const initModels = require('./models/initModels')
const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const invitationRouter = require('./invitations/invitations.router')

//?Configuraciones iniciales
const app = express()
app.use(express.json())
app.use(cors())

//? Validacion de acceso a db
db.authenticate()
  .then(() => console.log('Database Authenticated'))
  .catch((err) => console.log(err))
//? Sincronizacion modelos
db.sync()
  .then(() => console.log('Database Synced'))
  .catch(err => console.log(err))

//? Iniciando los modelos y las relaciones
initModels()

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Ok!',
  })
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/invitations', invitationRouter)

app.listen(config.api.port, () => {
  console.log(`Server started on ${config.api.host}`)
})

module.exports = app