// const express = require("express");
// const session = require("express-session");
// const dao = require("./services/dao");
//
// const app = express();
// app.set("views", __dirname + "/views");
// app.set("view engine", "ejs");
//
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
//
// app.use(session({
//     secret: "My Secret",
//     resave: false,
//     saveUninitialized: false
// }));
//
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
//
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
//
// app.post("/tweet", async (req, res) => {
//     await dao.insert(req.session.login, req.body.message);
//     res.redirect("/");
// });
//
// app.listen(3001, () => {
//     console.log("3001번 포트에서 대기중~~");
// })