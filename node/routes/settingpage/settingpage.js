const express = require("express");
const router = express.Router();

router.get("/settingpage", (req, res) => {
    res.render("page/settingpage", { title: "Setting Page" });
});


module.exports = router;