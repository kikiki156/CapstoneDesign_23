const express = require("express");
const router = express.Router();

router.get("/weekpage", (req, res) => {
    console.log("weekpage");
    res.render("weekpage/weekpage.html");
});


module.exports = router;
