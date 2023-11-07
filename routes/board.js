var express = require('express');
var router = express.Router();

router.get("/", async (req, res) => {
        obj = {};
        obj.login = req.session.login;
        obj.records = await dao.getAll();
        res.render("list", obj);
    }
);

module.exports = router;
