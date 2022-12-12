const Role = require('../models/Role')
const Actor = require('../models/Actor')
const Film = require('../models/Film')
class RoleController{
    static async getAllRole(req,res) {
        const result = await Role.getRole()
        const resultActor = await Actor.getActors()
        const resultFilm = null;
        if (result) {
            res.render('role', {
                result: result,
                resultActor: resultActor,
                resultFilm: req.body.titre
            })
        }
    }
    static async addRole(req, res) {
        let values = []
        let actorArray = req.body.actor;
        let roleArray = req.body.role;
        for (let i = 0;i < actorArray.length;i++){
            let rowArray = [];
            rowArray.push(req.body.film);
            rowArray.push(actorArray[i]);
            rowArray.push(roleArray[i]);
            values.push(rowArray);
        }
        const result = await Role.createRole(values);
        if (result) {
            res.redirect('/film');
        }
    }
}
module.exports = RoleController;