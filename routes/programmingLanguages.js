const express = require("express");
const router = express.Router();
const programmingLanguages = require("../services/programmingLanguages");
/* GET programming languages. */
router.get("/", async function (req, res, next) { // GET localhost:3000/programming-languages
    try {
        res.json(await programmingLanguages.getMultiple(req.query.page)); // service 함수
    } catch (err) {
        console.error('Error while getting programming languages ', err.message);
        next(err);
    }
});

router.post("/", async function (req, res, next) {
    try {
        res.json(await programmingLanguages.create(req.body));
    } catch (err) { console.error('Error while getting programming languages ', err.message);
        next(err);
    }
});



router.put("/:id", async function (req, res, next) {
    try {
        res.json(await programmingLanguages.update(req.params.id, req.body));
    } catch (err) {
        console.error('Error while getting programming languages ', err.message);
        next(err);
    }
});

router.delete("/:id", async function (req, res, next) {
    try {
        res.json(await programmingLanguages.remove(req.params.id));
    } catch (err) {
        console.error('Error while getting programming languages ', err.message);
        next(err);
    }
});


module.exports = router;