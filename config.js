require('dotenv').config()

module.exports = {
  api: {
    port: process.env.PORT,
    host: process.env.HOST,
  }
}

