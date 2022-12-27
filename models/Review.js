const db = require('../config/dbConnection');

class Review{
    static async getReview(userId , filmTitle) {
        return new Promise((resolve, reject) => { 
            db.query('SELECT *FROM review WHERE id_user = ? and titre_film = ?', [userId , filmTitle], (err,result) => {
                if (!err) {
                    resolve(result);
                }else{
                    reject(err)
                }
            })
        })
    }
    static async createReview(userId , filmTitle , starsNumber) {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO review
            (id_user, titre_film , stars)
            VALUES(?, ? , ?)
            ON DUPLICATE KEY UPDATE
            stars = ?`, [userId, filmTitle , starsNumber,starsNumber], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }
}
module.exports = Review;