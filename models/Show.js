const db = require('../config/dbConnection');

class Show{
    static async getShows() {
        return new Promise((resolve, reject) => { 
            db.query('SELECT film.titre,salle.nom FROM show_film,film,salle WHERE salle.id = show_film.id_salle and film.titre = show_film.titre_film', [], (err,result) => {
                if (!err) {
                    resolve(result);
                }
            })
        })
    }
    static async createShow(id_salle,titre_film,date,etat) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO show_film(id_salle,titre_film,date,etat) VALUES(?, ?, ?, ?)', [id_salle,titre_film,date,etat], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }
}
module.exports = Show;