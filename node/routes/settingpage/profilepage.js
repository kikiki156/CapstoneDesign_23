const express = require("express");
const router = express.Router();

// const controller = require("../../controller/settingpage/profilepage");

router.get("/profilepage", (req, res) => {
    console.log("profilepageeeeeeee");
    res.render("settingpage/profile.html");
});


module.exports = router;