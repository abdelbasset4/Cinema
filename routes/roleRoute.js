const route = require('express').Router()
const bodyParser = require("body-parser");
const verifyRoleHandler = require("../middleware/verifyRoles");
const RoleController = require('../controllers/roleController')

route.get('/',verifyRoleHandler, RoleController.getAllRole)
route.post('/',verifyRoleHandler,bodyParser.urlencoded({ extended: true }), RoleController.addRole)

module.exports = route