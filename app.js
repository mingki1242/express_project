const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'marine102@',
    database : 'nodedb'
});

connection.connect();

connection.query('SELECT * FROM product where id = 1',
    function(error , results , fields)
    {
        if(error) throw error;
        console.log("첫번째 레코드 : " , results[0]);
    }
)

connection.end();