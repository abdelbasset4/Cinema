const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cinema'
})
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connection");
})

module.exports = db;