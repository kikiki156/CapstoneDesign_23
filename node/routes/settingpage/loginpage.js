const express = require("express");
const router = express.Router();

const controller = require("../../controller/settingpage/loginpage");

router.get("/loginpage", (req, res) => {
    console.log("loginpage1234");
    res.render("settingpage/loginpage.html");
});
console.log(req);
router.post("/loginpage/acceptLogin", controller.acceptLogin);
router.post("/loginpage/acceptCreate", controller.acceptCreate);


module.exports = router;