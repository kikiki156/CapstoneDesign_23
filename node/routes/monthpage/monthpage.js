const express = require("express");
const router = express.Router();
const path = require("path");

// const controller = require("../../controller/monthpage/monthpage");

router.get("/monthpage", (req, res) => {
    console.log("monthpage");
    // res.render("monthpage/index.html");
    // change to static rendering
    // console.log(path.resolve("views/monthpage/index.html"));
    res.sendFile(path.resolve("views/monthpage/index.html"));
});


module.exports = router;