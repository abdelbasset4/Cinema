const Show = require('../models/Show')
const Salle = require('../models/Salle')
const Film = require('../models/Film')
class ShowController{
    static async getAllShow(req,res) {
        const result = await Show.getShows()
        const resultSalle = await Salle.getSalles()
        const resultFilm = await Film.getFilms()
        if (result) {
            res.render('show', {
                result: result,
                resultSalle: resultSalle,
                resultFilm: resultFilm
            })
        }
    }
    static async addShow(req, res) { 
        const result = await Show.createShow(req.body.cinema,req.body.film,req.body.dateShow,"Pending");
        if (result) {
            res.redirect('/show')
        }
    }
}
module.exports = ShowController;