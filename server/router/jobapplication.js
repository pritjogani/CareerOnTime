const express = require('express');
const jobapplication = require('../controller/applyjob');
const router = express.Router();

router.route("/applyforjob").post(jobapplication);


module.exports = router;