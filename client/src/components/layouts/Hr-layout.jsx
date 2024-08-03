// import { NavLink, Outlet, Navigate } from "react-router-dom"
// import { useAuth } from "../../store/auth";


// export const Hrlayout = () =>{
//     const {user, isloading , isLoggedIn} =useAuth();
//     if(isloading)
//         {
//             return <h1>..is loading</h1>
//         }
//     if(!user.ishr)
//         {
//             return <Navigate to="/" />
//         }
//     return <>

//         <header>
//             <div className="container">
//             <nav> 
//                     <nav>
//                         <li> <NavLink to="/">Home</NavLink></li>
//                         <li> <NavLink to="/jobs">Jobs</NavLink></li>
//                         <li> <NavLink to="/about">About</NavLink></li>
//                         <li> <NavLink to="/contact">Contact</NavLink></li>
//                         <li> <NavLink to="/service">Service</NavLink></li>
                        
//                             <li><NavLink to="/hr">hr </NavLink></li>
                        
//                         { isLoggedIn ? (<li><NavLink to="/logout">logout</NavLink></li>):
//                         (  <> <li> <NavLink to="/register">Register</NavLink></li> 
//                             <li> <NavLink to="/login">Login</NavLink></li>
//                             </>)}
                            
                            

                            
                     
//                     </nav>
//                 </nav>
//             </div>
//         </header>
//         <Outlet />
//     </>
// }