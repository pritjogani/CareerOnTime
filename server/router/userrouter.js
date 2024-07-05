const express = require('express');
const router = express.Router();
const usercontroller = require('../controller/usercontroller');


router.route("/").get(usercontroller.home);

module.exports = router;