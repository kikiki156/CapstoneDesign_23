const express = require("express");
const router = express.Router();

// const controller = require("../../controller/cocktails/cocktails");

router.get("/dailypage", (req, res) => {
    console.log("dailypageeeeeeee");
    res.render("index/index.html");
});


module.exports = router;