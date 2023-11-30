const express = require("express");
const router = express.Router();

// const controller = require("../../controller/settingpage/loginpage");

router.get("/loginpage", (req, res) => {
    console.log("loginpageeeeeeee");
    res.render("settingpage/loginpage.html");
});


module.exports = router;