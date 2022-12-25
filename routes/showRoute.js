const route = require('express').Router()
const bodyParser = require("body-parser");
const verifyRoleHandler = require("../middleware/verifyRoles");
const ShowController = require('../controllers/showController')

route.get('/',verifyRoleHandler, ShowController.getAllShow)
route.post('/',verifyRoleHandler,bodyParser.urlencoded({ extended: true }), ShowController.addShow)

module.exports = route