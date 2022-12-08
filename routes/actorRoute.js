const route = require('express').Router()
const bodyParser = require("body-parser");

const ActorController = require('../controllers/actorController')

route.get('/', ActorController.getAllActor)
route.post('/',bodyParser.urlencoded({ extended: true }), ActorController.addActor)

module.exports = route