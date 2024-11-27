import { NavLink, Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../../store/auth";


export const Hrlayout = () =>{
    const {user, isloading , isLoggedIn} =useAuth();
    if(isloading)
        {
            return <h1>..is loading</h1>
        }
    if(!user.ishr)
        {
            return <Navigate to="/" />
        }
    return <>

        <header>
            <div className="container">
            <nav> 
                    <nav>
                        
                        
                            <li><NavLink to="/hr/hrhome"> </NavLink></li>
                         
                     

                            
                     
                    </nav>
                </nav>
            </div>
        </header>
        <Outlet />
    </>
}
// import { NavLink, Outlet, Navigate } from "react-router-dom"
// import { useAuth } from "../../store/auth"

// export const AdminLayout = () =>{
//     const {user, isloading} =useAuth();
//     if(isloading)
//         {
//             return <h1>..is loading</h1>
            
//         }
//     if(!user.isAdmin)
//         {
//             return <Navigate to="/" />
//         }
//     return <>

//         <header>
//             <div className="container">
//             <nav>
//                 <ul>
//                     <li>
//                     <NavLink to="/hrhome">hrhome</NavLink>
//                      </li>
                  
//                     <li>services</li>
//                     <li>Home</li>
//                 </ul>
//             </nav>
//             </div>
//         </header>
//         <Outlet />
//     </>
// }