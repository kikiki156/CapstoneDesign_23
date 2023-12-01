const express = require("express");
const router = express.Router();
const path = require("path");

const controller = require("../../controller/monthpage/monthpage");

router.get("/monthpage", (req, res) => {
    console.log("monthpage");
    res.sendFile(path.resolve("views/monthpage/index.html"));
});

router.post("/monthpage", controller.scheduleRead);
router.post("/monthpage/scheduleCreate", controller.scheduleCreate);
router.post("/monthpage/scheduleDelete", controller.scheduleDelete);
router.post("/monthpage/scheduleUpdate", controller.scheduleUpdate);

module.exports = router;