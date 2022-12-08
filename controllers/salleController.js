const Salle = require('../models/Salle')

class SalleController{
    static async getAllSalles(req,res) {
        const result = await Salle.getSalles()
        if (result) {
            res.render('salle', {
                result:result
            })
        }
    }
    static async addSalle(req, res) { 
        const result = await Salle.createSalle(req.body.name, req.body.wilaya);
        if (result) {
            res.redirect('/salle')
        }
    }
}
module.exports = SalleController;