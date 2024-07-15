import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

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
            
            navigate('/');
            

        } 

    }
    catch(error){
        console.log("invalid details")
        alert("invalid details");
        
    }


}
    return <>
        <section>
            <main>
                <div className="section-register">
                    <div className="container">
                        <div className="login-img">
                            <img src="" alt="" />
                        </div>

                        {/* let takel registration form */}
                        <div className="login-form">
                            <h1>Login form</h1>
                        </div>
                        <form action="" onSubmit={handlesubmit}>

                            <div>
                                <label htmlFor="email">email:</label>
                                <input type="text" name="email" placeholder="enter email" id="email"  required autoComplete="off" value={user.username} onChange={handleinput} />

                                <br />

                                <label htmlFor="password"> password</label>
                                <input type="password" name="password" placeholder="enter password" id="password"  required autoComplete="off" value={user.password} onChange={handleinput}/>

                            </div>
                            <br />

                            <button type="submit" className="btn -btn submit">login</button>

                        </form>
                    </div>
                </div>
            </main>
        </section>
    </>
};