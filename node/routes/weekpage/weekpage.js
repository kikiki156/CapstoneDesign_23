const express = require("express");
const router = express.Router();

// const controller = require("../../controller/weekpage/weekpage");

router.get("/weekpage", (req, res) => {
    console.log("weekpage");
    res.render("weekpage/weekpage.html");
});


module.exports = router;