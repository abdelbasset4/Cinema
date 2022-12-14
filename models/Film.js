const db = require('../config/dbConnection');

class Film{
    static async getFilms() {
        return new Promise((resolve, reject) => { 
            db.query('SELECT *FROM film', [], (err,result) => {
                if (!err) {
                    resolve(result);
                }
            })
        })
    }
    static async createFilm(titre,titre_original,realisateur,payee_dorigine,duree,anne,distributeur,synopsis,image,trailler) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO film(titre,titre_original,realisateur,payee_dorigine,duree,anne,distributeur,synopsis,image,trailler) VALUES(?,?,?,?,?,?,?,?,?,?)', [titre,titre_original,realisateur,payee_dorigine,duree,anne,distributeur,synopsis,image,trailler], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }
    static async getShowedFilms(){
        return new Promise((res , rej) => {
            db.query('SELECT * FROM show_film , film WHERE show_film.titre_film = film.titre ', [], (err,result) => {
                if (!err) {
                    res(result);
                }
            })
        })
    }
}
module.exports = Film;