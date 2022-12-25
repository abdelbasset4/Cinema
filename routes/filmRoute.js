const route = require('express').Router()
const bodyParser = require("body-parser");
const multer = require('multer')
const verifyRoleHandler = require("../middleware/verifyRoles");
const verifyAuthHandler = require('../middleware/verifyUserAuth')
const FilmController = require('../controllers/filmContoller')

route.get('/', FilmController.getShowedFilms)
route.post('/',verifyRoleHandler,bodyParser.urlencoded({ extended: true }),multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "images/");
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + "-" + file.originalname);
        }
    })
}).single("image"), FilmController.addFilm)

route.get('/:filmTitle',verifyAuthHandler,FilmController.getSpecificFilm)

module.exports = route