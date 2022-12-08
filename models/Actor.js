const db = require('../config/dbConnection');

class Actor{
    static async getActors() {
        return new Promise((resolve, reject) => { 
            db.query('SELECT *FROM actor', [], (err,result) => {
                if (!err) {
                    resolve(result);
                }
            })
        })
    }
    static async createActor(name, country) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO actor(name,country) VALUES(?, ?)', [name, country], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }
}
module.exports = Actor;