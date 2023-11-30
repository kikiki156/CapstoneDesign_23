const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Base url");
    console.log("Base url");
});

const DailypageRouter = require("./dailypage/dailypage");
const MonthpageRouter = require("./monthpage/monthpage");
const WeekpageRouter = require("./weekpage/weekpage");
const SettingpageRouter = require("./settingpage/settingpage");
const ProfilepageRouter = require("./settingpage/profilepage");
const LoginpageRouter = require("./settingpage/loginpage");


router.use("/", DailypageRouter);
router.use("/", MonthpageRouter);
router.use("/", WeekpageRouter);
router.use("/", SettingpageRouter);
router.use("/", ProfilepageRouter);
router.use("/", LoginpageRouter);


module.exports = router;