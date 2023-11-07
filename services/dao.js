const db = require("./db");


//모든 내용 가져오기
async function getAllList() {
    const sql = "select id , title , writer," +
        "date_format(regdate ,'%Y-%m-%d %H:%i:%d') regdate , read_cnt from board";
    const result = await db.query(sql);
    if (!result) {
        return [];
    } else {
        return result;
    }
}


async function insert(writer , body)
{
    const sql = "insert into tweet values(? , ? , ?)";
    await db.query(sql , [writer , body , newDate()]);
}

module.exports = {
    getAllList,
    insert
}