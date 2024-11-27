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
     <section className="flex items-center justify-center min-h-screen bg-gray">
  <main className="w-full max-w-8xl mx-auto px-6 py-12">
    <div className="grid lg:grid-cols-2 items-center gap-8 bg-white shadow-lg rounded-lg overflow-hidden">
      
      {/* Image Section */}
      <div className="hidden lg:block">
        <img src="loginn.png" alt="Login Illustration" className="w-full max-w-4xl object-cover" />
      </div>

      {/* Form Section */}
      <div className="p-8 md:p-12 lg:p-16">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Login to Your Account</h1>

        <form action="" onSubmit={handlesubmit} className="space-y-6">
          
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
              autoComplete="off"
              value={user.username}
              onChange={handleinput}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              autoComplete="off"
              value={user.password}
              onChange={handleinput}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Login
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <a href="/register" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  </main>
</section>




    </>
};