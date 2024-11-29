import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useEffect, useState } from "react";

const Navbar = () =>{


const {isLoggedIn} = useAuth();


const {user ,userAuthentication} = useAuth();
const [isHR, setIsHR] = useState(false);
// const {hr} = useAuth();

useEffect(() => {

  const  checkUserPermissions = () => {
   
    
    let hrr = user.ishr;
     setIsHR(hrr);
   }

  checkUserPermissions();
});


const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
};

    return <>
        <header className="section-navbar ">
       
            <div className="mx-auto  justify-between items-center flex">
            <div className="navbar-brand">
                <div className="border-2 p-2 border-black">
              <p className="font-bold bg-blue-400 border-2  p-5">Career On Time</p>
              </div>
                </div>
                
                    <nav className="navbar grid   ">
                    <div className="lg:grid-cols-7 hidden md:flex space-x-12">
                        <li className="nav-item"> <NavLink to="/">Home</NavLink></li>
                        
                        <li className="nav-item"> <NavLink to="/about">About</NavLink></li>
                        <li className="nav-item"> <NavLink to="/contact">Contact</NavLink></li>
                        {/* <li className="nav-item"> <NavLink to="/service">Service</NavLink></li> */}
                        {/* {
                            user.ishr ? (<><li className="nav-item"><NavLink to="/hrhome">hr</NavLink></li></>):(<></>)
                        } */}
                        
                   {    }
                        { isLoggedIn ? (<> <li className="nav-item"> <NavLink to="/jobs">Jobs</NavLink></li><li className="nav-item"><NavLink to="/logout">logout</NavLink>
                       </li>{
                        isHR && (
    <li className="nav-item">
      <NavLink to="/hr/hrhome">HR</NavLink>
    </li>
  )
}</>):
                        (  <> <li> <NavLink to="/register">Register</NavLink></li> 
                            <li> <NavLink to="/login">Login</NavLink></li>
                            </>)}

                            
                            </div>
                            <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <img className="w-10" src="menuimg.png" alt="" />
          </button>
        </div>
                            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                            <li className="nav-item"> <NavLink to="/">Home</NavLink></li>
                        <li className="nav-item"> <NavLink to="/jobs">Jobs</NavLink></li>
                        <li className="nav-item"> <NavLink to="/about">About</NavLink></li>
                        <li className="nav-item"> <NavLink to="/contact">Contact</NavLink></li>
                        <li className="nav-item"> <NavLink to="/service">Service</NavLink></li>
                        {
                            user.ishr ? (<><li className="nav-item"><NavLink to="/hrhome">hr</NavLink></li></>):(<></>)
                        }
                        { isLoggedIn ? (<li className="nav-item"><NavLink to="/logout">logout</NavLink></li>):
                        (  <> <li> <NavLink to="/register">Register</NavLink></li> 
                            <li> <NavLink to="/login">Login</NavLink></li>
                            </>)}
                            
      </div>

                            
                     
                    </nav>
                    
        
                
         
                
                
            </div>
        </header>
    </>

}

export default Navbar;