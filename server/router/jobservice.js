const express = require('express');
const router = express.Router();
const hrmiddleware = require('../middleware/hr-middleware');
const usermiddleware = require('../middleware/usermiddleware');
const authjob = require("../controller/jobscontroller")


router.route("/addjob").post(usermiddleware,hrmiddleware ,authjob.addJob)
router.route("/updatejob/:id").put(usermiddleware, hrmiddleware,authjob.updatejobinfo)
router.route("/deletejob/job/:id").delete(usermiddleware, hrmiddleware, authjob.deletejob)
router.route("/alljobtitle").post(usermiddleware,authjob.getAlljobtitle)


module.exports = router;
