const db = require('../config/dbConnection');

class Role{
    static async getRole() {
        return new Promise((resolve, reject) => { 
            db.query('SELECT *from role', [], (err,result) => {
                if (!err) {
                    resolve(result);
                }
            })
        })
    }
    static async createRole(values) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO role(titre_film,id_actor,role) VALUES?', [values], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }
}
module.exports = Role;