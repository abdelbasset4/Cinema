const Actor = require('../models/Actor')

class ActorController{
    static async getAllActor(req,res) {
        const result = await Actor.getActors()
        if (result) {
            res.render('actor', {
                result:result
            })
        }
    }
    static async addActor(req, res) { 
        console.log(req.body.name, req.body.country);
        const result = await Actor.createActor(req.body.name, req.body.country);
        if (result) {
            res.redirect('/actor')
        }
    }
}
module.exports = ActorController;