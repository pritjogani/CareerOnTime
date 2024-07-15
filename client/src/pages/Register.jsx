import { useState } from "react";
import { useAuth } from "../store/auth"
import { useNavigate } from "react-router-dom";

export const Register = () =>{
        const {storeTokenInLs} = useAuth();
        const [user,setUser]  = useState({
            username:"",
            password:"",
            email:"",
            role:"",
            phone:"",
            city:"",
            collage:"",
            age:"",
            companyname:"",
            cgpa:"",



        })
        const navigate= useNavigate();

        //handlingn the input value
        const handleinput = (e) =>{
            console.log(e)
            let name = e.target.name;
            let value = e.target.value;

            setUser({
                ...user,
                [name]:value
            })
        }

        //handling form for submission
        const handlesubmit = async (e) => {
            e.preventDefault();
            console.log(user)
        
        try {
            const responce = await fetch(`http://localhost:5000/api/auth/register`,{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
            })
            const res_data = await responce.json();
          if(responce.ok)
          {
            storeTokenInLs(res_data.token)
            setUser({
                username:"",
            password:"",
            email:"",
            role:"",
            phone:"",
            city:"",
            collage:"",
            age:"",
            companyname:"",
            cgpa:"",

            })
            navigate('/')
          }


        }
        catch(error)
        {
            console.log("something went wrong")
        }
    }
    return<>
         <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img src="/images/login.png" alt=""  width="400" height="500" />
                        </div>

                        {/* let takel registration form */}
                        <div className="registraion-form">
                           <h1 className="main-heading mb-3">registraion form</h1>
                           <br />
                           <form onSubmit={handlesubmit} action="
                           ">
                            <div>
                                <label htmlFor="username">username</label>
                                <br />
                                <input type="text" name="username"  placeholder="username" id="username" required autoComplete="off" value={user.username} onChange={handleinput}/>
<br />
                                <label htmlFor="email">email</label>
                                <br />
                                <input type="email" name="email"  placeholder="enter your email" id="email" required autoComplete="off" value={user.email} onChange={handleinput} />
<br />
                                <label htmlFor="phone">phone</label>
                                <br />
                                <input type="number" name="phone"  placeholder="enter phone no" id="phone" required autoComplete="off" value={user.phone} onChange={handleinput} />
<br />
                                <label htmlFor="password">password</label>
                                <br />
                                <input type="password" name="password"  placeholder="enter password" id="password" required autoComplete="off" value={user.password} onChange={handleinput}/>
                            </div>
                            <br />
                            <label htmlFor="role">role</label>
                                <br />
                                <input type="text" name="role"  placeholder="if you register as ht then write HR" id="role" required autoComplete="off" value={user.role} onChange={handleinput}/>
<br />
                                <label htmlFor="city">city</label>
                                <br />
                                <input type="text" name="city"  placeholder="enter your city" id="city" required autoComplete="off" value={user.city} onChange={handleinput} />
<br />
                                <label htmlFor="collage">collage</label>
                                <br />
                                <input type="text" name="collage"  placeholder="enter phone collage" id="collage" required autoComplete="off" value={user.collage} onChange={handleinput} />
<br />
                                <label htmlFor="age">age</label>
                                <br />
                                <input type="number" name="age"  placeholder="enter age" id="age" required autoComplete="off" value={user.age} onChange={handleinput}/>
                          
                            <br />
                            <label htmlFor="comapnyname">company name</label>
                                <br />
                                <input type="text" name="companyname"  placeholder="enter phone compnay name" id="companyname" required autoComplete="off" value={user.companyname} onChange={handleinput} />
<br />
                                <label htmlFor="cgpa">cgpa</label>
                                <br />
                                <input type="text" name="cgpa"  placeholder="enter cgpa" id="cgpa" required autoComplete="off" value={user.cgpa} onChange={handleinput}/>
                          
                            <br />
                            <button type="submit" className="btn btn-submit">Register Now</button>
                           </form>
                        </div>

                    </div>
                </div>
            </main>
        </section>
    </>
        
}

