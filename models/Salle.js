const db = require('../config/dbConnection');

class Salle{
    static async getSalles() {
        return new Promise((resolve, reject) => { 
            db.query('SELECT *FROM salle', [], (err,result) => {
                if (!err) {
                    resolve(result);
                }
            })
        })
    }
    static async createSalle(name, wilaya) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO salle(nom,wilaya) VALUES(?, ?)', [name, wilaya], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }
}
module.exports = Salle;