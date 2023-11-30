const express = require("express");
const router = express.Router();

// const controller = require("../../controller/monthpage/monthpage");

router.get("/monthpage", (req, res) => {
    console.log("monthpage");
    res.render("monthpage/index.html");
});


module.exports = router;