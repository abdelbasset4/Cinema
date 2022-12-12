const route = require('express').Router()
const bodyParser = require("body-parser");

const RoleController = require('../controllers/roleController')

route.get('/', RoleController.getAllRole)
route.post('/',bodyParser.urlencoded({ extended: true }), RoleController.addRole)

module.exports = route