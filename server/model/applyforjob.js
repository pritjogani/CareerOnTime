const mongoose = require('mongoose');

const applyforjob = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
    achievement: {
        type: String,
        required: true,
       
    },
    expextedsalary: {
       type:String
       ,require:true
    },
    privioussalary: {
        type: String,
        required: true
    },
    refrences: {
        type: String,
        required: true
    },
    expirence: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    collagename: {
        type: String,
        required: true
    },
   
});

const jobappluserinfo = mongoose.model('applyjob', applyforjob);

module.exports = jobappluserinfo;
