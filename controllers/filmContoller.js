const Film = require('../models/Film')

class FilmController{
    static async getAllFilms(req,res) {
        const result = await Film.getFilms()
        if (result) {
            res.render('film', {
                result:result
            })
        }
    }
    static async addFilm(req, res) { 
        req.body.image = req.file.filename;
        const result = await Film.createFilm(req.body.titre,req.body.titre_original,req.body.realisateur,req.body.payee_dorigine,req.body.duree,req.body.anne,req.body.distributeur,req.body.synopsis,req.body.image,req.body.trailler);
        if (result) {
            res.redirect('/film')
        }
    }
}
module.exports = FilmController;