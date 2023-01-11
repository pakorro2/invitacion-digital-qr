//? Dependencias
const express = require('express')

//? Archivos
const config = require('../config')

//?Configuraciones iniciales
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Ok!',
  })
})

app.listen(config.api.port, () => {
  console.log(`Server started on ${config.api.host}`)
})

module.exports = app