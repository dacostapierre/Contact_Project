const userRouter = require('express').Router()
const bcrypt = require('bcrypt')

userRouter.get('/', async (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

module.exports = userRouter