function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * listPerPage; // 현재 페이지의 시작 레코드 위치
}
function emptyOrRows(rows) {
    if (!rows) {
        return [];
    }
    return rows;
}
module.exports = {
    getOffset,
    emptyOrRows,
};