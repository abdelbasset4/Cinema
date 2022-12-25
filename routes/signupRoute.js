const route = require('express').Router()
const bodyParser = require("body-parser");
const {getSignupPage , signUpUser} = require('../controllers/signupController')
route.get('/', getSignupPage )
.post('/',bodyParser.urlencoded({ extended: true }),signUpUser);
module.exports = route;