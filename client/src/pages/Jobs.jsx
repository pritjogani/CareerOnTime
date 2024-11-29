import { Link } from "react-router-dom";
import { useAuth } from "../store/auth"

export const Jobs = () =>{
    const {jobs}  = useAuth()
    return (
        <section className="section-services">
        <div className="container ">
            <h1 className="main-heading">jobs</h1>

        </div>
        <div className="container grid grid-cols-1">
        {
            jobs.map((curElem,index) => {   
const {title,description,department,location,salary,jobType,Dateofjoin,requirements,responsibilities,company,conatactEmail,contactphone,status,id} = curElem;
return(<> 
  <li key={id} className="mb-8">
  <div className="bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transform transition-transform duration-300 hover:scale-105 flex flex-col lg:flex-row">
    {/* Image Section */}
    <div className="lg:w-1/2 overflow-hidden rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none">
      <img 
        src="jobsimg.png" 
        className="w-full h-full object-cover" 
        alt="Job Preview" 
      />
    </div>

    
    <div className="p-6 lg:w-1/2 space-y-4">
    
      <h2 className="text-6xl font-bold text-gray-900 tracking-tight">
        {title}
      </h2>
    
      <p className="text-3xl text-gray-600 font-semibold">Department:{department}</p>
      <p className="text-3xl text-gray-600 font-semibold">Location:{location}</p>
      <p className="text-3xl text-gray-600 font-semibold">Description:{description}</p>
        <p className="text-3xl text-gray-600 font-semibold">Salary: {salary}</p>
        <p className="text-3xl text-gray-600 font-semibold">Type: {jobType}</p>
        <p className="text-3xl text-gray-600 font-semibold">Joining Date: {Dateofjoin}</p>
        <p className="text-3xl text-gray-600 font-semibold">Company: {company}</p>
        <p className="text-3xl text-gray-600 font-semibold">Responsibilities: {responsibilities}</p>
        <p className="text-3xl text-gray-600 font-semibold">Status: {status}</p>
        <p className="text-3xl text-gray-600 font-semibold">Contact Email: {conatactEmail}</p>
        <p className="text-3xl text-gray-600 font-semibold">Contact Phone: {contactphone}</p>
           <div className="pt-4">
        <Link to="/applyforjobs">
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-2 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 transition duration-300">
            Apply Now
          </button>
        </Link>
      </div>
      </div>

     

    </div>
  
</li>


      </>
 

            )   })}
            
        </div>

        </section>
    )
    
}