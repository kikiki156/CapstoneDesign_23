const express = require("express");
const router = express.Router();

router.get("/monthpage", (req, res) => {
    console.log("monthpage");
    res.send("monthpage");
    // res.render("../../page/monthpage/main.html", { title: "Month Page" });
});


module.exports = router;