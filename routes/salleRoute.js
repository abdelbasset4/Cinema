const route = require('express').Router()
const bodyParser = require("body-parser");

const SalleController = require('../controllers/salleController')

route.get('/', SalleController.getAllSalles)
route.post('/',bodyParser.urlencoded({ extended: true }), SalleController.addSalle)

module.exports = route