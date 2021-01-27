const mysql = require('mysql');



const mysqlConnection = () => {
    return mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'myfinance'
        }
    )
}

module.exports = () => {
    return mysqlConnection;
}