const db = require('../config/dbConnection');

class User{
    static async getUsers() {
        return new Promise((resolve, reject) => { 
            db.query('SELECT * FROM user', [], (err,result) => {
                if (!err) {
                    resolve(result);
                }
            })
        })
    }
    static async getSpecificUser(username) {
        return new Promise((resolve, reject) => { 
            db.query('SELECT * FROM user WHERE username = ?', [username], (err,result) => {
                if (!err) {
                    resolve(result);
                }
            })
        })
    }
    static async createUser(username , password , role="user") {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO user(username,password , role) VALUES(?, ? , ?)', [username , password , role], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }
}
module.exports = User;