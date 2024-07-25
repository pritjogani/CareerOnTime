import { Link } from "react-router-dom";
import { useAuth } from "../store/auth"

export const Jobs = () =>{
    const {jobs}  = useAuth()
    return (
        <section className="section-services">
        <div className="container ">
            <h1 className="main-heading">jobs</h1>

        </div>
        <div className="container grid grid-cols-3">
        {
            jobs.map((curElem,index) => {
const {title,description,department,location,salary,jobType,Dateofjoin,requirements,responsibilities,company,conatactEmail,contactphone,status} = curElem;
return(
          
            <div className="card " key={index}>
                <div className="card-img">
                    <img src="/images/study.png" alt="" width="300" />
                </div>
    <div className="card-details">
        <div className="grid grid-cols-2">
        <div>
        <p>{title}</p>
        <p>{department}</p>
        </div>
        <div>
            <h2>
            {description}
            </h2>
            <p>{location}</p>
            <p>{salary}</p>
           
            <p>{jobType}</p>
            <p>{Dateofjoin}</p>
            <p>{responsibilities}</p>
            <p>{company}</p>
            <p>{conatactEmail}</p>
            <p>{contactphone}</p>
            <p>{status}</p>
            <button > <Link  to="/applyforjobs">Go to Other Page</Link> </button>
        </div>
            

        </div> 

    </div>

            </div>
            )   })}
            
        </div>

        </section>
    )
    
}