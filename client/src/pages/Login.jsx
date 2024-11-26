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
  <main className="container mx-auto grid lg:grid-cols-2 gap-8">
    
    <img src="loginn.png" className="sm:order-2 max-sm:order-2 w-full h-auto" alt="Login Illustration" />

    {/* Registration form */}
    <div className="sm:order-1 md:order-1 order-1 flex flex-col items-center">
      <h1 className="mb-8 text-4xl font-bold text-gray-800 text-center">Login Form</h1>
      
      <form onSubmit={handlesubmit} className="w-full max-w-md space-y-6">
        
        <div>
          <label htmlFor="email" className="block text-xl font-semibold text-gray-700 mb-2">
            Email:
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            type="email"
            name="email"
            placeholder="Enter your email"
            id="email"
            required
            autoComplete="off"
            value={user.username}
            onChange={handleinput}
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-xl font-semibold text-gray-700 mb-2">
            Password:
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            type="password"
            name="password"
            placeholder="Enter password"
            id="password"
            required
            autoComplete="off"
            value={user.password}
            onChange={handleinput}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200 ease-in-out"
        >
          Login
        </button>

      </form>
    </div>
    
  </main>
</section>

    </>
};