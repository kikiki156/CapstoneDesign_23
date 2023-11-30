const express = require("express");
const router = express.Router();

// const controller = require("../../controller/dailypage/dailypage");

router.get("/dailypage", (req, res) => {
    console.log("dailypageeeeeeee");
    res.render("index/index.html");
});


module.exports = router;