const express = require('express');
const router = express.Router();
const dao = require("../services/dao");
router.get("/", async (req, res) => {
        obj = {};
        obj.login = req.session.login;
        obj.records = await dao.getAllList();
        res.render("list", obj); //obj 객체를 랜더로 넘겨줌
    }
);

router.get("/board/write" , (req,res) => {
    res.render("write");
})

router.post("/board/write" , async (req,res) =>{
   await dao.insert(req.session.login , req.body.title ,req.body.body)
   res.redirect("/");
});

router.get("/board/:id" , async (req , res) =>{
    obj = {};
    obj.login = req.session.login;
    obj.record = await dao.getOne(req.params.id , true);
    res.render("detail" , obj);
})

router.get("/board/update/:id" (req,res) =>{
    obj = {};
    obj.login = req.session.login;
    obj.record = await dao.getOne(req.params.id , false);
    res.render("update" , obj);
})

module.exports = router;
