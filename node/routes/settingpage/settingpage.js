const express = require("express");
const router = express.Router();

const controller = require("../../controller/settingpage/settingpage");

router.get("/settingpage", (req, res) => {
    console.log("settingpage");
    res.render("settingpage/settingpage.html");
});


router.post("/settingpage/getClassHour", controller.getClassHour);

module.exports = router;