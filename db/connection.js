const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',
    // Your MySQL username
    user: 'root',
    // Your MYSQL password
    password: '01274105Ec#',
    database: 'election'
});

module.exports = db;