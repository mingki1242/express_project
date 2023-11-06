const mysql = require("mysql2/promise");
const config = require("../config");
async function query(sql, params) {
    const connection = await mysql.createConnection(config.db); // connection을 연결하고
    const [results] = await connection.query(sql, params); // query를 실행하는 함수
    return results;
}
module.exports = {
    query,
};