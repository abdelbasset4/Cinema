
const route = require('express').Router()
const {getIndexPage} = require('../controllers/homeController')
const verifyAuthHandler = require('../middleware/verifyUserAuth')
route.get('/', verifyAuthHandler,getIndexPage )

module.exports = route
