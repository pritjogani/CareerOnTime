const User = require("../model/usermodel");


const home = async (req,res) =>{
    try{
res.status(200).send("welcome to home page");
    }
    catch(error){
        console.log(error)


    }

}

const register = async (req,res) =>{
    try{


const {username,password,email,city,phone,collage,age,role,companyname,cgpa} = req.body;
const userexist = await User.findOne({email:email});
if(userexist){
    return res.status(400).json({message:"email already exist"});
}

if(role === "hr")
{

    const hrcreated = await User.create({username,password,email,city,phone,companyname,age,hr:true})
    console.log(hrcreated)
    res.status(200).json({message: "registration succesfull", token: await hrcreated.generateToken(), userID:hrcreated._id.toString(),})
}
else
{
    const employee = await User.create({username,password,email,city,phone,collage,age,cgpa})
    console.log(employee);
    res.status(200).json({message: "registration succesfull", token: await employee.generateToken(), userID:employee._id.toString(),})
}

}


catch(error){
console.log(error)
}
}

const  login = async (req,res) =>{
    try{
    const {email,password} = req.body;
    const userexits = await User.findOne({email:email})
    if(!userexits)
    {
        return res.status(400).json({message:"user not exits"})
    }
    const user = await userexits.comparePassword(password);
    console.log(user);
    console.log(userexits);
    if(user){
        res.status(200).json({message:"log in sucessful", token: await userexits.generateToken(),userID: userexits._id.toString(),})
        console.log("login successful")
    }
    else
    {
        res.status(401).json({message:"invaild details"})
        
    }


}
catch(error)
{
    res.status(401).json("internal server error")
    console.log(error)
}
}




const user = async (req,res) =>{
    try{
        
        const userData = req.user;
         console.log(userData)
         return res.status(200).json({userData})
       // res.status(200).json({msg:"hi prit"})
    }catch(error){
        console.log(`error from the user route ${error}`)
    }
}


module.exports = {home,user,register,login};