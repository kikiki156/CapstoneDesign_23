const express = require("express");
const router = express.Router();

const controller = require("../../controller/dailypage/dailypage");

router.get("/dailypage", (req, res) => {
    console.log("dailypageeeeeeee");
    res.render("index/index.html");
});

router.post("/scheduleRead", controller.scheduleRead);
router.post("/checklistRead", controller.checklistRead);
router.post("/scheduleCreate", controller.scheduleCreate);
router.post("/scheduleDelete", controller.scheduleDelete);
router.post("/scheduleUpdate", controller.scheduleUpdate);
router.post("/checklistCreate", controller.checklistCreate);
router.post("/checklistDelete", controller.checklistDelete);
router.post("/checklistUpdate", controller.checklistUpdate);


module.exports = router;