const applyforjob  = require("../model/applyforjob");

const jobapplication = async(req,res) =>{
    const {firstname,lastname,education,workexp,skills,achievement,expextedsalary,privioussalary,refrences,expirence,email,collagename} = req.body;
try{
    const jobdata= await applyforjob.create({firstname,lastname,education,skills,achievement,expextedsalary,privioussalary,refrences,expirence,email,collagename});
    return res.status(200).json({message:"you are successfull aplied"})
}

catch(error)
{
    console.log(error);
}



}
module.exports = jobapplication;