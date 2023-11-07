const express = require("express");
const app = express();
const programmingLanguagesRouter = require("./routes/programmingLanguages");

//미들웨어 바디파서
app.use(express.json());
app.use(express.urlencoded({extended : true,}));

app.get("/" , (req,res) => {res.json({message : "ok"});});
app.use("/programming-languages", programmingLanguagesRouter); // 라우터 지정 미들웨어 localhost:3000/programming-languages
app.use((err, req, res, next) => { // Error handler middleware
    const statusCode = err.statusCode || 500; console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
}); // 에러 처리
app.listen(3000, () => { console.log(`Example app listening at http://localhost:3000`); });
