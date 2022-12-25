const route = require('express').Router()
const bodyParser = require("body-parser");
const verifyRoleHandler = require("../middleware/verifyRoles");
const ActorController = require('../controllers/actorController')

route.get('/', verifyRoleHandler,ActorController.getAllActor)
route.post('/',verifyRoleHandler,bodyParser.urlencoded({ extended: true }), ActorController.addActor)

module.exports = route