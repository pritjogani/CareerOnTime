import { Link, NavLink } from "react-router-dom"
import { Jobs } from "./Jobs"
import { useAuth } from "../store/auth";

export const Home = () =>{

  const {user} = useAuth(); 
    return (
        <>
        <div>
        <div className="main">
      <div className="section-hero">
        <div className="container grid lg:grid-cols-2 sm:grid-cols-1 ">
          <div className="section-hero--content">
          <p className="text-5xl text-slate-700 mb-3">Welcome {user ?`${user.username}  `: `to our website`}</p>
          <h1></h1>
            <p className="hero-subheading">Elevate your career from dreams to reality</p>
            <h1 className="hero-heading">Find your dream job at just the right moment with CareerOnTime.</h1>
            <p className="hero-para">
            At CareerOnTime, we understand that finding the right job isn’t just about timing—it’s about finding the perfect match for your skills and aspirations. Let us guide you to opportunities that align with your career goals and come at just the right moment for your professional growth.
            </p>
            <div className="hero-btn">
             {/* <button className=""> <NavLink to="">Apply Jobs </NavLink></button> */}
            </div>
          </div>
          <div className="section-hero-img">
            <figure>
              <img src="boy.png" alt="Study Material" />
            </figure>
          </div>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1707119447">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
    </div>
    
    <div className="mb-10 ">
      <p className="font-semibold text-center m-8 text-5xl">Get ahead with CareerOnTime</p>
      <p className=" text-center m-2 ">we are serving up trusted insights and anonymous conversation.<br /> so you will have the goods you need to succeed  </p>
    </div>
    <div className="grid  sm:grid-cols-2  lg:grid-cols-4 ">
      <div className="transition-transform transform hover:scale-110 hover:shadow-xl" >
      <div className="flex justify-center">
      <img src="msg.png" alt="" className="m-8 w-44" />
      </div>
        <p className="text-center">Join your work community</p>
      </div>
      <div className="transition-transform transform hover:scale-110 hover:shadow-xl">
      <div className="flex justify-center">
      <img src="job.png" alt="" className="m-8 w-48" />
      </div>
        <p className="text-center"> Find and apply to jobs</p>
      </div>
      <div className="transition-transform transform hover:scale-110 hover:shadow-xl">
      <div className="flex justify-center">
      <img src="mobile.png" alt="" className="m-8 w-48" />
      </div>
        <p className="text-center pt-3">Search company reviews</p>
      </div>
      <div className="transition-transform transform hover:scale-110 hover:shadow-xl">
      <div className="flex justify-center">
      <img src="sal.png" alt="" className="m-8 w-48" />
      </div>
        <p className="text-center pt-4"> Compare salaries</p>
      </div>
    </div>
    <div className="mb-56"></div>
    <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           
            <div>
                <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-4">
                    <li>
                        <NavLink to="/" className="text-lg hover:text-blue-400 transition-colors text-white">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/jobs" className="text-lg hover:text-blue-400 transition-colors text-white">Jobs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="text-lg hover:text-blue-400 transition-colors text-white">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="text-lg hover:text-blue-400 transition-colors text-white">Contact</NavLink>
                    </li>
                </ul>
            </div>

           
            <div>
                <h3 className="text-2xl font-bold mb-4">About Us</h3>
                <p className="text-lg text-gray-400">We provide the best job opportunities and connect job seekers with the right companies. Join us today and explore amazing career paths!</p>
            </div>

            <div>
                <h3 className="text-2xl font-bold mb-4">Contact</h3>
    
                <p className="text-lg text-gray-400">Email: joganiprit2004@gmail.com</p>
                <p className="text-lg text-gray-400">Phone: 8160882490</p>
            </div>

            <div>
                <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-6">
                    <a href="#" className="text-3xl text-gray-400 hover:text-blue-400 transition-colors">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-3xl text-gray-400 hover:text-blue-400 transition-colors">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-3xl text-gray-400 hover:text-blue-400 transition-colors">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-3xl text-gray-400 hover:text-blue-400 transition-colors">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>

     
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
            <p className="text-lg text-gray-400">&copy; 2024 JobPortal. All Rights Reserved.</p>
        </div>
    </div>
</footer>


    
    </>
        //  <Jobs />
    )
}