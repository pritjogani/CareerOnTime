const home = async (req,res) =>{
    try{
res.status(200).send("welcome to home page");
    }
    catch(error){
        console.log(error)


    }

}

module.exports = {home};