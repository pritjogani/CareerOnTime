const express = require('express');
const router = express.Router();
const usercontroller = require('../controller/usercontroller');


router.route("/").get(usercontroller.home);
router.route("/register").post(usercontroller.register);
router.route("/login").post(usercontroller.login);
module.exports = router;