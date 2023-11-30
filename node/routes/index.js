const express = require("express");
const router = express.Router();
const path = require("path");



const DailypageRouter = require("./dailypage/dailypage");
const MonthpageRouter = require("./monthpage/monthpage");
const WeekpageRouter = require("./weekpage/weekpage");
const SettingpageRouter = require("./settingpage/settingpage");
const ProfilepageRouter = require("./settingpage/profilepage");
const LoginpageRouter = require("./settingpage/loginpage");

router.get("/", (req, res) => {
    // send to Login page
    res.redirect("/loginpage");

});

router.use("/", DailypageRouter);
router.use("/", MonthpageRouter);
router.use("/", WeekpageRouter);
router.use("/", SettingpageRouter);
router.use("/", ProfilepageRouter);
router.use("/", LoginpageRouter);
router.use(
    "/bootstrap",
    express.static(path.join(__dirname, "../node_modules/bootstrap/dist"))
);



module.exports = router;