const route = require('express').Router()
const {logout} = require('../controllers/logoutController')

route.post('/', logout )

module.exports = route
