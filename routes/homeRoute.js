
const route = require('express').Router()
const {getIndexPage} = require('../controllers/homeController')
const {verifyAuthOnGet} = require('../middleware/verifyUserAuth')
route.get('/', verifyAuthOnGet,getIndexPage )

module.exports = route
