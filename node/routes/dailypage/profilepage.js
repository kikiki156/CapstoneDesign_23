const express = require("express");
const router = express.Router();

// const controller = require("../../controller/cocktails/cocktails");

router.get("/profilepage", (req, res) => {
    console.log("profilepageeeeeeee");
    res.render("index/profile.html");
});


module.exports = router;