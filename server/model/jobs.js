const mongoose = require('mongoose');

const jobPostingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }, 
    department: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true,
       
    },
    Dateofjoin: {
       type:String
       ,require:true
    },
    requirements: {
        type: [String],
        required: true
    },
    responsibilities: {
        type: [String], // Array of strings
        required: true
    },
    company: {
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: true
    },
    contactPhone: {
        type: String,
        required: true
    },
    // createdBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // }, 
    status: {
        type: String,
        enum: ['Open', 'Closed'],
        default: 'Open'
    }
});

const JobPosting = mongoose.model('job', jobPostingSchema);

module.exports = JobPosting;
