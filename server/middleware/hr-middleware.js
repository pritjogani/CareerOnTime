const hrmiddleware = async (req,res,next) =>
    {
        try {
         // console.log(req.user)
            const hrrole = req.user.ishr;
            console.log(hrrole); 
            //req.status(200).json({msg:req.user.isAdmin})
            if(!hrrole)
                {

                    
                    return res.status(403).json({message:"Acess denied. User is not an  hr"})
    
                }
                //if user is an admin procced to the next middleware.
                //next method goes to next function.
            next();
    
    
            
        } catch (error) {
           next(error); 
            
        }
    }
    
    module.exports = hrmiddleware;