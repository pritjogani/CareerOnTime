import { useState } from "react"
import { useAuth } from "../store/auth";


const defaultjobform = {
  username: "",
  email:"",
  firstname:"",
lastname:"",
education:"",
skills:"",
achievement:"",
expextedsalary:"",
privioussalary:"",
refrences:"",
expirence:"",
collagename:"",

}


export const Applyforjobs = () =>{
    const [appyjob , setapplyjob]  = useState(defaultjobform)
    const [userdata , setuserdata] = useState(true);

    const {user} = useAuth();
    if(userdata && user) 
    {
      setapplyjob({
        email:user.email,
        username:user.username,
        firstname:"",
        lastname:"",
        education:"",
        skills:"",
        achievement:"",
        expextedsalary:"",
        privioussalary:"",
        refrences:"",
        expirence:"",
        collagename:"",
       
      })
      setuserdata(false);
    }
      const handlereq = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setapplyjob({
            ...appyjob , [name] : value
        }
        
        )
    }
  


  const fun = async (e) =>{
    e.preventDefault();
     console.log("data is",appyjob);
    // console.log(user);
   try {
    const responce = await fetch("http://localhost:5000/api/job/applyforjob",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(appyjob)
    })
    if(responce.ok){
        setapplyjob(defaultjobform);
        const data = await responce.json();
        console.log(data);
        alert("message send successfully")
    }
    
   } catch (error) {
        console.log("invalid details")
   }

}

   
return <>
<div>
<div className="  mx-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gray-50 ">
  <div className="hero-img flex justify-center items-center order-2 lg:order-1">
    <img src="reigisterimg.png" alt="Register" className="" />
  </div>

  <div className="form-part order-1 lg:order-2">
    <div className="text-6xl font-bold mb-8 text-center  text-gray-800">
      Application Form
    </div>

    <form action="" onSubmit={fun} className="space-y-6">
    
      <div className="flex flex-col">
        <label htmlFor="username" className="text-lg font-medium text-gray-700">
          Username
        </label>
        <input
          type="text"
          className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          name="username"
          placeholder="Enter username"
          required
          id="username"
          value={appyjob.username}
          onChange={handlereq}
        />
      </div>

  
      <div className="flex flex-col">
        <label htmlFor="email" className="text-lg font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          name="email"
          placeholder="Enter email"
          required
          id="email"
          value={appyjob.email}
          onChange={handlereq}
        />
      </div>

     
      <div className="flex flex-col">
        <label htmlFor="firstname" className="text-lg font-medium text-gray-700">
          First Name
        </label>
        <input
          type="text"
          className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          name="firstname"
          placeholder="Enter first name"
          required
          id="firstname"
          value={appyjob.firstname}
          onChange={handlereq}
        />
      </div>

 
      <div className="flex flex-col">
        <label htmlFor="lastname" className="text-lg font-medium text-gray-700">
          Last Name
        </label>
        <input
          type="text"
          className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          name="lastname"
          placeholder="Enter last name"
          required
          id="lastname"
          value={appyjob.lastname}
          onChange={handlereq}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="education" className="text-lg font-medium text-gray-700">
          Education
        </label>
        <input
          type="text"
          className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          name="education"
          placeholder="Enter education"
          required
          id="education"
          value={appyjob.education}
          onChange={handlereq}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="skills" className="text-lg font-medium text-gray-700">
          Skills
        </label>
        <input
          type="text"
          className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          name="skills"
          placeholder="Enter skills"
          required
          id="skills"
          value={appyjob.skills}
          onChange={handlereq}
        />
      </div>


      <div className="flex flex-col">
        <label htmlFor="achievement" className="text-lg font-medium text-gray-700">
          Achievements
        </label>
        <input
          type="text"
          className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          name="achievement"
          placeholder="Enter achievements"
          required
          id="achievement"
          value={appyjob.achievement}
          onChange={handlereq}
        />
      </div>


      <div className="flex flex-col">
        <label htmlFor="expectedsalary" className="text-lg font-medium text-gray-700">
          Expected Salary
        </label>
        <input
          type="text"
          className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          name="expectedsalary"
          placeholder="Enter expected salary"
          required
          id="expectedsalary"
          value={appyjob.expectedsalary}
          onChange={handlereq}
        />
      </div>

  
      <div className="flex flex-col">
        <label htmlFor="previoussalary" className="text-lg font-medium text-gray-700">
          Previous Salary
        </label>
        <input
          type="text"
          className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          name="previoussalary"
          placeholder="Enter previous salary"
          required
          id="previoussalary"
          value={appyjob.previoussalary}
          onChange={handlereq}
        />
      </div>


      <div className="flex flex-col">
        <label htmlFor="references" className="text-lg font-medium text-gray-700">
          References
        </label>
        <input
          type="text"
          className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          name="references"
          placeholder="Enter references"
          required
          id="references"
          value={appyjob.references}
          onChange={handlereq}
        />
      </div>

    
      <div className="flex flex-col">
        <label htmlFor="experience" className="text-lg font-medium text-gray-700">
          Experience
        </label>
        <input
          type="text"
          className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          name="experience"
          placeholder="Enter experience"
          required
          id="experience"
          value={appyjob.experience}
          onChange={handlereq}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="collegename" className="text-lg font-medium text-gray-700">
          College Name
        </label>
        <input
          type="text"
          className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          name="collegename"
          placeholder="Enter college name"
          required
          id="collegename"
          value={appyjob.collegename}
          onChange={handlereq}
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 mt-6 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  </div>
</div>

 </div>
 </>
}
