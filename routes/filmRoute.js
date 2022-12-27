const route = require('express').Router()
const bodyParser = require("body-parser");
const multer = require('multer')
const verifyRoleHandler = require("../middleware/verifyRoles");
const {verifyAuthOnGet , verifyAuthOnPost} = require('../middleware/verifyUserAuth')
const FilmController = require('../controllers/filmContoller');
const reviewController = require('../controllers/reviewController');

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

route.get('/:filmTitle',verifyAuthOnGet,reviewController.showReview , FilmController.getSpecificFilm);
route.put('/:filmTitle',verifyAuthOnPost,reviewController.leaveReview);

module.exports = route