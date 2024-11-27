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
<li key={id}>
    <div className="bg-white shadow-lg rounded-lg  border border-gray-200 hover:shadow-xl transition-shadow duration-300 grid lg:grid-cols-2 transition-transform duration-300 ease-in-out hover:scale-105" key={index}>
      <div className="grid grid-cols-2">
      <div>
        <img src="jobsimg.png " className="w-30" alt="" />
      </div>
      <div className="p-4 ">
        <p className=" font-bold text-4xl mb-2">{title}</p>
        <p className="text-gray-600 mb-2">{department}</p>
        <p className="text-gray-800 mb-4">{location}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <p>{salary}</p>
           
           <p>{jobType}</p>
           <p>{Dateofjoin}</p>
           <p>{responsibilities}</p>
           <p>{company}</p>
           <p>{conatactEmail}</p>
           <p>{contactphone}</p>
           <p>{status}</p>

        <button className="inline-block bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"> <Link className="text-black !important"  to="/applyforjobs">Apply Now</Link> </button>

       
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