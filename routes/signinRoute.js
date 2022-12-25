const route = require('express').Router()
const bodyParser = require("body-parser");
const {getSigninPage , signinUser} = require('../controllers/signinController')
route.get('/', getSigninPage )
.post('/',bodyParser.urlencoded({ extended: true }), signinUser)

module.exports = route;
