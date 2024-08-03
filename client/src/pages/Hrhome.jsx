import { useState } from "react"
import { useNavigate } from "react-router-dom";
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
<section>
    <main>
        <div className="section-registration">
            <div className="container grid grid-two-cols">
                <div className="registration-image">
                    <img src="/images/login.png" alt=""  width="400" height="500" />
                </div>

                {/* let takel registration form */}
                <div className="registraion-form">
                   <h1 className="main-heading mb-3">add job form</h1>
                   <br />
                   <form onSubmit={handlesubmit} action="
                   ">
                    <div>
                    <label htmlFor="title">title</label>
                        <br />
                        <input type="text" name="title"  placeholder="title" id="title" required autoComplete="off" value={job.title} onChange={handleinput}/>
<br />
<label htmlFor="description">description</label>
                        <br />
                        <input type="text" name="description"  placeholder="description" id="description" required autoComplete="off" value={job.description} onChange={handleinput}/>
<br />
                        <label htmlFor="department">department</label>
                        <br />
                        <input type="text" name="department"  placeholder="department" id="department" required autoComplete="off" value={job.department} onChange={handleinput}/>
<br />
                        <label htmlFor="email">location</label>
                        <br />
                        <input type="text" name="location"  placeholder="location" id="location" required autoComplete="off" value={job.location} onChange={handleinput} />
<br />
                        <label htmlFor="salary">salary</label>
                        <br />
                        <input type="text" name="salary"  placeholder="salary" id="salary" required autoComplete="off" value={job.salary} onChange={handleinput} />
<br />
                        <label htmlFor="jobType">jobType</label>
                        <br />
                        <input type="text" name="jobType"  placeholder="enter jobType" id="jobType" required autoComplete="off" value={job.jobType} onChange={handleinput}/>
<br />
                        <label htmlFor="requirements">requirements</label>
                        <br />
                        <input type="text" name="requirements"  placeholder="requirements" id="requirements" required autoComplete="off" value={job.requirements} onChange={handleinput} />
<br />
<label htmlFor="responsibilities">responsibilities</label>
                        <br />
                        <input type="text" name="responsibilities"  placeholder="responsibilities" id="responsibilities" required autoComplete="off" value={job.responsibilities} onChange={handleinput} />
<br />
<label htmlFor="company">company</label>
                        <br />
                        <input type="text" name="company"  placeholder="company" id="company" required autoComplete="off" value={job.company} onChange={handleinput} />
<br />
<label htmlFor="salary">contactEmail</label>
                        <br />
                        <input type="text" name="contactEmail"  placeholder="contactEmail" id="contactEmail" required autoComplete="off" value={job.contactEmail} onChange={handleinput} />
<br />
<label htmlFor="contactPhone">contactPhone</label>
                        <br />
                        <input type="text" name="contactPhone"  placeholder="contactPhone" id="contactPhone" required autoComplete="off" value={job.contactPhone} onChange={handleinput} />
<br />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-submit">Add now</button>
                   </form>
                </div>

            </div>
        </div>
    </main>
</section>
</>

};