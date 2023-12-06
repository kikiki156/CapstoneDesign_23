const express = require("express");
const router = express.Router();

router.get("/profilepage", (req, res) => {
    console.log("profilepageeeeeeee");
    res.render("settingpage/profilepage.html");
});


module.exports = router;
