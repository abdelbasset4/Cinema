const route = require('express').Router()
const bodyParser = require("body-parser");

const ShowController = require('../controllers/showController')

route.get('/', ShowController.getAllShow)
route.post('/',bodyParser.urlencoded({ extended: true }), ShowController.addShow)

module.exports = route