const express = require('express');
const router = express.Router();
const dao = require("../services/dao");
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// app.get("/login", async (req, res) => {
//   if (!req.session.login)
//     res.render("login");
//   else {
//     obj = {};
//     obj.login = req.session.login;
//     obj.records = await dao.getAll();
//     res.render("main", obj);
//   }
// });

router.get("/login" , (req,res) => {
  res.render("login");
});

router.post("/login", (req, res, next) => {
    req.session.regenerate(err => {
        if (err)
            next(err);
        req.session.login = req.body.name;
        req.session.save(err => {
            if (err)
                next(err);
            res.redirect("/");
        })
    });
});

router.get("/logout", (req, res, next) => {
  req.session.regenerate(err => {
    if (err)
      next(err);
    delete req.session.login;
    req.session.save(err => {
      if (err)
        next(err);
      res.redirect("/");
    })
  });
});

module.exports = router;
