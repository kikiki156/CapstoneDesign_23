const express = require("express");
const router = express.Router();

// const controller = require("../../controller/settingpage/settingpage");

router.get("/settingpage", (req, res) => {
    console.log("settingpage");
    res.render("settingpage/settingpage.html");
});


module.exports = router;