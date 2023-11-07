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


async function insert(writer , title ,body)
{
    const sql = "insert into board (writer , title , body , regdate) values(?,?,?,?)";
    await db.query(sql , [writer , title ,body , new Date()]);
}

async function getOne(id , increment)
{
    let sql = "select * from board where id = ?";
    const rows = await db.query(sql , [id]);
    if(increment){
        sql = "update board set read_cnt = read_cnt+1 where id = ?";
        await db.query(sql , [id]);
    }
    return rows[0];
}

module.exports = {
    getAllList,
    insert,
    getOne
}