import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

const Navbar = () =>{


const {isLoggedIn} = useAuth();


const {hr} = useAuth();
// const hrr = hr.ishr;
    return <>
        <header>
            <div className="container">
                <div className="logo-brand">
                pritjogani
                </div>
                <nav> 
                    <nav>
                        <li> <NavLink to="/">Home</NavLink></li>
                        <li> <NavLink to="/jobs">Jobs</NavLink></li>
                        <li> <NavLink to="/about">About</NavLink></li>
                        <li> <NavLink to="/contact">Contact</NavLink></li>
                        <li> <NavLink to="/service">Service</NavLink></li>
                        {
                            hr ? (<><li><NavLink to="/hr">hr </NavLink></li></>):(<></>)
                        }
                        { isLoggedIn ? (<li><NavLink to="/logout">logout</NavLink></li>):
                        (  <> <li> <NavLink to="/register">Register</NavLink></li> 
                            <li> <NavLink to="/login">Login</NavLink></li>
                            </>)}
                            
                            

                            
                     
                    </nav>
                </nav>
            </div>
        </header>
    </>

}

export default Navbar;