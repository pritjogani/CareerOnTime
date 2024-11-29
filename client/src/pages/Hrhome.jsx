import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";


export const Hrhome = () =>{
    const {authorizationtoken} = useAuth();
    
const [job,setjobs] = useState({  
    title:"",
                description:"",
department:"",
location:"",
salary:"",
jobType:"",
requirements:"",
responsibilities:"",
company:"",
contactEmail:"",
contactPhone:""
});
const navigate = useNavigate()
const handleinput = (e) =>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setjobs({
        ...job,
        [name]:value
    })
}

const handlesubmit = async (e) =>{
    e.preventDefault();
    console.log(job);

    try {
        const responce = await fetch(`http://localhost:5000/api/hr/addjob`,{
            method:"POST",
            headers:{
                
                Authorization: authorizationtoken,
                "Content-Type": "application/json"
            },
            body:JSON.stringify(job)
        })
        const res_data = await responce.json();
        if(responce.ok)
        {
            setjobs({
                title:"",
                description:"",
department:"",
location:"",
salary:"",
jobType:"",
requirements:"",
responsibilities:"",
company:"",
contactEmail:"",
contactPhone:""



            })
            navigate('/');
            
        }
    } catch (error) {
        console.log(error)
        
    }
}
    

return <>
<section className="bg-gray-50  flex items-center justify-center py-12">
  <main className="w-full max-w-14xl mx-auto px-6 lg:px-12">
    <div className="section-registration bg-white p-8 md:p-12 rounded-lg shadow-lg">
      <h1 className="main-heading text-3xl font-extrabold text-gray-800 mb-8 text-center">
        Add Job Form
      </h1>

      <form 
        onSubmit={handlesubmit} 
        className="space-y-6"
      >
      
        <div>
          <label htmlFor="title" className="block text-lg font-semibold text-gray-600">
            Job Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter job title"
            required
            autoComplete="off"
            value={job.title}
            onChange={handleinput}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

  
        <div>
          <label htmlFor="description" className="block text-lg font-semibold text-gray-600">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Enter job description"
            required
            autoComplete="off"
            value={job.description}
            onChange={handleinput}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32 resize-none"
          />
        </div>

        
        <div>
          <label htmlFor="department" className="block text-lg font-semibold text-gray-600">
            Department
          </label>
          <input
            type="text"
            name="department"
            id="department"
            placeholder="Enter department"
            required
            autoComplete="off"
            value={job.department}
            onChange={handleinput}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

       
        <div>
          <label htmlFor="location" className="block text-lg font-semibold text-gray-600">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Enter location"
            required
            autoComplete="off"
            value={job.location}
            onChange={handleinput}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

    
        <div>
          <label htmlFor="salary" className="block text-lg font-semibold text-gray-600">
            Salary
          </label>
          <input
            type="text"
            name="salary"
            id="salary"
            placeholder="Enter salary"
            required
            autoComplete="off"
            value={job.salary}
            onChange={handleinput}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

     
        <div>
          <label htmlFor="jobType" className="block text-lg font-semibold text-gray-600">
            Job Type
          </label>
          <input
            type="text"
            name="jobType"
            id="jobType"
            placeholder="Enter job type"
            required
            autoComplete="off"
            value={job.jobType}
            onChange={handleinput}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="requirements" className="block text-lg font-semibold text-gray-600">
            Requirements
          </label>
          <textarea
            name="requirements"
            id="requirements"
            placeholder="Enter job requirements"
            required
            autoComplete="off"
            value={job.requirements}
            onChange={handleinput}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24 resize-none"
          />
        </div>

       
        <div>
          <label htmlFor="responsibilities" className="block text-lg font-semibold text-gray-600">
            Responsibilities
          </label>
          <textarea
            name="responsibilities"
            id="responsibilities"
            placeholder="Enter job responsibilities"
            required
            autoComplete="off"
            value={job.responsibilities}
            onChange={handleinput}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24 resize-none"
          />
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="contactEmail" className="block text-lg font-semibold text-gray-600">
              Contact Email
            </label>
            <input
              type="email"
              name="contactEmail"
              id="contactEmail"
              placeholder="Enter contact email"
              required
              autoComplete="off"
              value={job.contactEmail}
              onChange={handleinput}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="contactPhone" className="block text-lg font-semibold text-gray-600">
              Contact Phone
            </label>
            <input
              type="text"
              name="contactPhone"
              id="contactPhone"
              placeholder="Enter contact phone"
              required
              autoComplete="off"
              value={job.contactPhone}
              onChange={handleinput}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

     
        <div className="w-full text-center mt-8">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-12 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Add Job
          </button>
        </div>
      </form>
    </div>
  </main>
</section>

</>

};