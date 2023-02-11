const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
require('express-async-errors')

const contactRouter = require('./controllers/contact')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

if(process.env.NODE_ENV === 'development')
  app.use(middleware.requestLogger)

app.use('/api/users', contactRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app