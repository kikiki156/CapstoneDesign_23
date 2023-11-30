const express = require("express");
const router = express.Router();

router.get("/dailypage", (req, res) => {
    console.log("dailypage");
    res.send("dailypage");
});


module.exports = router;