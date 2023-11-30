const express = require("express");
const router = express.Router();

const controller = require("../../controller/dailypage/dailypage");

router.get("/dailypage", (req, res) => {
    console.log("dailypageeeeeeee");
    res.render("index/index.html");
});

router.post("/dailypage/scheduleRead", controller.scheduleRead);
router.post("/dailypage/checklistRead", controller.checklistRead);
router.post("/dailypage/scheduleCreate", controller.scheduleCreate);
router.post("/dailypage/scheduleDelete", controller.scheduleDelete);
router.post("/dailypage/scheduleUpdate", controller.scheduleUpdate);
router.post("/dailypage/checklistCreate", controller.checklistCreate);
router.post("/dailypage/checklistDelete", controller.checklistDelete);
router.post("/dailypage/checklistUpdate", controller.checklistUpdate);


module.exports = router;