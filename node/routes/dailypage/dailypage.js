const express = require("express");
const router = express.Router();

router.get("/dailypage", (req, res) => {
    console.log("dailypageeeeeeee");
    res.render("index/index.html");
});


module.exports = router;