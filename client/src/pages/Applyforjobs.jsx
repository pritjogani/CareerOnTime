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
 <div className="section-contact container grid grid-two-cols">

     <div className="hero-img">
         <img src="./images/login.png" alt=""  width="70%" height="50"/>
     </div>
     <div className="form-part">
         <div className=" text-5xl mb-20 text-cyan-50 ">
             Contact now 
         </div>
         <form action="
         " onSubmit={fun}>
             <label htmlFor="username" className="text-4xl mb-6 mr-5" >username:</label>
             <input type="text" className="mb-7" name="username" placeholder="enter username" required id="username" value={appyjob.username} onChange={handlereq}/>
             <br />

             <label htmlFor="email" className="text-4xl mb-6 mr-24">email:</label>
             <input type="email" className="mb-7" name="email" placeholder="enter email" required id="email" value={appyjob.email} onChange={handlereq}  />
             <br />

             <label htmlFor="firstname" className="text-4xl mb-6 mr-5" >first name:</label>
             <input type="text" className="mb-7" name="firstname" placeholder="enter first name" required id="firstname" value={appyjob.firstname} onChange={handlereq}/>
             <br />
             <label htmlFor="lastname" className="text-4xl mb-6 mr-5" >lastname:</label>
             <input type="text" className="mb-7" name="lastname" placeholder="enter lastname" required id="lastname" value={appyjob.lastname} onChange={handlereq}/>
             <br />
             <label htmlFor="education" className="text-4xl mb-6 mr-5" >education:</label>
             <input type="text" className="mb-7" name="education" placeholder="enter education" required id="education" value={appyjob.education} onChange={handlereq}/>
             <br />
             <label htmlFor="skills" className="text-4xl mb-6 mr-5" >skills:</label>
             <input type="text" className="mb-7" name="skills" placeholder="enter skills" required id="skills" value={appyjob.skills} onChange={handlereq}/>
             <br />
             <label htmlFor="achievement" className="text-4xl mb-6 mr-5" >achievement:</label>
             <input type="text" className="mb-7" name="achievement" placeholder="enter achievement" required id="achievement" value={appyjob.achievement} onChange={handlereq}/>
             <br />
             <label htmlFor="expextedsalary" className="text-4xl mb-6 mr-5" >expextedsalary:</label>
             <input type="text" className="mb-7" name="expextedsalary" placeholder="enter expextedsalary" required id="expextedsalary" value={appyjob.expextedsalary} onChange={handlereq}/>
             <br />
             <label htmlFor="privioussalary" className="text-4xl mb-6 mr-5" >privioussalary:</label>
             <input type="text" className="mb-7" name="privioussalary" placeholder="enter privioussalary" required id="privioussalary" value={appyjob.privioussalary} onChange={handlereq}/>
             <br />
             <label htmlFor="refrences" className="text-4xl mb-6 mr-5" >refrences:</label>
             <input type="text" className="mb-7" name="refrences" placeholder="enter refrences" required id="refrences" value={appyjob.refrences} onChange={handlereq}/>
             <br />
             <label htmlFor="expirence" className="text-4xl mb-6 mr-5" >expirence:</label>
             <input type="text" className="mb-7" name="expirence" placeholder="enter expirence" required id="expirence" value={appyjob.expirence} onChange={handlereq}/>
             <br />
             <label htmlFor="collagename" className="text-4xl mb-6 mr-5" >collagename:</label>
             <input type="text" className="mb-7" name="collagename" placeholder="enter collagename" required id="collagename" value={appyjob.collagename} onChange={handlereq}/>
             <br />
         
             <button type="submit" className="btn mt-20">
                    submit
             </button>

         </form>
     </div>
 </div>
 </div>
 </>
}
