import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Login = () =>{
   const [user,setUser] = useState({
    email:"",
    password:""
   });
   const navigate = useNavigate();
   const  {storeTokenInLs}= useAuth();

   //handling the input value
   const handleinput = (e) =>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
        ...user,
        [name]:value
    })
   }


//handling form for submission
//we write code for connect backend
const handlesubmit = async (e) =>{
    e.preventDefault();
    console.log(user);
    try{
        const responce = await fetch(`http://localhost:5000/api/auth/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
        console.log(responce)
        const res_data = await responce.json();
        if(responce.ok){
            console.log(`res from server`,res_data)
            storeTokenInLs(res_data.token);
            setUser({
                email:"",
                password:""
            })
            //for diffrent navigate hrpage and userpage so its dependent in role of 
            //so that feature is remaing added 
            toast.success("login sucessful");
            navigate('/');
            

        } 
        else{
            toast.error(res_data.extradetails ? res_data.extradetails : res_data.message)
 
        }

    }
    catch(error){
        console.log("invalid details")
        alert("invalid details");
        
    }


}
    return <>
        <section className="mt-11">
            <main className="container grid lg:grid-cols-2">
                
         
                            <img src="loginn.png" className="sm:order-2  max-sm:order-2"  alt="" />
                        

                        {/* let takel registration form */}
                        <div className=" sm:order-1 md:order-1 order-1">
                            <h1 className="mb-16 text-center">Login form</h1>
                       
                        <form action="" onSubmit={handlesubmit}>

                            <div>
                                <label htmlFor="email" className="text-4xl ">Email:</label>
                                <br />
                                <input className="pr-24" type="text" name="email" placeholder="enter email" id="email"  required autoComplete="off" value={user.username} onChange={handleinput} />

                                <br />

                                <label htmlFor="password" className="text-4xl"> Password</label>
                                <br />
                                <input type="password" name="password" placeholder="enter password" id="password"  required autoComplete="off" value={user.password} onChange={handleinput}/>

                            </div>
                            <br />

                            <button type="submit" className="btn-btn submit bg-blue-400">login</button>

                        </form>
                    </div>
                
               
            </main>
        </section>
    </>
};