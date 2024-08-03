import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import {Home} from "./pages/Home"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Logout } from "./pages/Logout"
import { Jobs } from "./pages/Jobs"
import { Hrhome } from "./pages/Hrhome"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Applyforjobs } from "./pages/Applyforjobs";
// import { Hrlayout } from "./components/layouts/Hr-layout"



const App = () =>{
  return <>
    
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/login" element={<Login />} />
        <Route path= "/register" element={<Register />} />
        <Route path= "/logout" element={<Logout />} />
        <Route path= "/about" element={<About />} />
        <Route path= "/jobs" element={<Jobs />} />
        <Route path= "/hrhome" element={<Hrhome />} />
        <Route path= "/contact" element={<Contact />} />

        <Route path="/applyforjobs" element={<Applyforjobs />} />

        {/* <Route path="/hr" element={<Hrlayout />}> */}
        
        {/* <Route path="contacts" element={<Admincontacts />} />
        <Route path="/admin/users/:id/edit" element={<Adminupdate />} /> */}

        {/* </Route> */}
      </Routes>
     </BrowserRouter>


    
  </>
}
export default App;
