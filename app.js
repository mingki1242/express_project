const express = require("express");
const session = require("express-session");
const dao = require("./services/dao");
const user_router = require("./routes/users");
const board_router = require("./routes/board");
const app = express();


app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(session({
    secret: "My Secret",
    resave: false,
    saveUninitialized: false
}));
//라우터 설정
app.use("/" , board_router);
app.use("/user" , user_router);

// app.get("/", async (req, res) => {
//     if (!req.session.login)
//         res.render("login");
//     else {
//         obj = {};
//         obj.login = req.session.login;
//         obj.records = await dao.getAll();
//         res.render("main", obj);
//     }
// });

// app.post("/login", (req, res, next) => {
//     req.session.regenerate(err => {
//         if (err)
//             next(err);
//         req.session.login = req.body.name;
//         req.session.save(err => {
//             if (err)
//                 next(err);
//             res.redirect("/");
//         })
//     });
// });

// app.post("/tweet", async (req, res) => {
//     await dao.insert(req.session.login, req.body.message);
//     res.redirect("/");
// });

app.listen(3000, () => {
    console.log("3000번 포트에서 대기중~~");
})