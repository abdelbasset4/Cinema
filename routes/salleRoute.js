const route = require('express').Router()
const bodyParser = require("body-parser");
const verifyRoleHandler = require("../middleware/verifyRoles");
const SalleController = require('../controllers/salleController')

route.get('/', verifyRoleHandler,SalleController.getAllSalles)
route.post('/',verifyRoleHandler,bodyParser.urlencoded({ extended: true }), SalleController.addSalle)

module.exports = route