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

module.exports = router;
