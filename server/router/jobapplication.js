const express = require('express');
const jobapplication = require('../controller/applyforjob');
const router = express.Router();

router.route("/jobapplication").post(jobapplication);

module.exports = router;