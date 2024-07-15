import { NavLink } from "react-router-dom";

const Navbar = () =>{



    return <>
        <header>
            <div className="container">
                <div className="logo-brand">
                pritjogani
                </div>
                <nav> 
                    <nav>
                        <li> <NavLink to="/">Home</NavLink></li>
                        <li> <NavLink to="/about">About</NavLink></li>
                        <li> <NavLink to="/contact">Contact</NavLink></li>
                        <li> <NavLink to="/service">Service</NavLink></li>
                        <li><NavLink to="/logout">logout</NavLink></li>
                        <li> <NavLink to="/register">Register</NavLink></li> 
                        <li> <NavLink to="/login">Login</NavLink></li>
                            
                     
                    </nav>
                </nav>
            </div>
        </header>
    </>

}

export default Navbar;