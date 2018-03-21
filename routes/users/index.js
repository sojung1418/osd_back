var express = require("express");
var router = express.Router();
var { signUp } = require("./signUp");
var { basicSignIn } = require("./basicSignIn");
var check = require("./check");
var auth = require("../../middlewares/auth");

router.post("/signUp", signUp);
router.post("/basicSignIn", basicSignIn);

router.use("/check", auth);
router.get("/check", check);

module.exports = router;