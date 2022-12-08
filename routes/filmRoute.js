const route = require('express').Router()
const bodyParser = require("body-parser");
const multer = require('multer')

const FilmController = require('../controllers/filmContoller')

route.get('/', FilmController.getAllFilms)
route.post('/',bodyParser.urlencoded({ extended: true }),multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "images/");
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + "-" + file.originalname);
        }
    })
}).single("image"), FilmController.addFilm)

module.exports = route