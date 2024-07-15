const JobPosting = require('../model/jobs');
const User = require('../model/usermodel');

// Function to add a new job posting
const addJob = async (req, res) => {
    const {
        title,
        description,
        department,
        location,
        salary,
        jobType,
        requirements,
        responsibilities,
        company,
        contactEmail,
        contactPhone
    } = req.body;

    // if (
    //     !title || !description || !department || !location || !salary || !jobType ||
    //     !requirements || !responsibilities || !company || !contactEmail || !contactPhone
    // ) { 
    //     return res.status(400).json({ message: 'All fields are required' });
    // }


    try { 
        const newJob = new JobPosting({
            title,
            description,
            department,
            location,
            salary,
            jobType,
            requirements,
            responsibilities, 
            company,
            contactEmail,
            contactPhone,
            createdBy: req.userID
        });

        const savedJob = await newJob.save();
        res.status(201).json(savedJob);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deletejob = async (req,res) =>{
    try {
        const id = req.params.id;
        await JobPosting.deleteOne({_id:id});
        return res.status(200).json({message:"designation deleted successfully"})
    
    } catch (error) {
        next(error);
    }
    }

    
const updatejobinfo = async (req,res) =>{
        try {
            const id = req.params.id;
            const updatedjobinfo = req.body;
            const updatejob = await User.updateOne({_id:id},{$set: updatedjobinfo});
            return res.status(200).json(updatejob)
    
        } catch (error) {
            next(error);
        }
    }

    const getAlljobtitle = async (req,res) =>{
        try {
            const jobs = await JobPosting.find();
            console.log(jobs)
            
            if(!jobs || jobs.length === 0)
                return res.status(404).json({message:"no jobs found"})
            
            return res.status(200).json(jobs);
          
    
    
        } catch (error) {
            next(error);
         
    
        } 
    }

module.exports = {
    addJob,deletejob,updatejobinfo,getAlljobtitle
};
