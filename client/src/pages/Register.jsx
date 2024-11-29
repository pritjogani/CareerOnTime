import { useState } from "react";
import { useAuth } from "../store/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Register = () => {
    const navigate = useNavigate()
    const hrfunction = () =>{
        navigate("/hregister")
    }
   const userfunction = ()=>{
    navigate("/userregister")
   }

    return (
        <>
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br ">
  <main className="w-full max-w-16xl mx-auto px-6 py-12">
    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
      

      <div className="registration-image flex justify-center items-center">
        <img 
          src="fill.png" 
          alt="Registration Illustration" 
          className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-md object-cover hover:scale-105 transition-transform duration-300 ease-in-out" 
        />
      </div>

 
      <div className="registration-form flex flex-col justify-center items-center w-full space-y-8">
        <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight text-center">
          Register as
        </h2>
        <p className="text-gray-600 text-lg text-center">
          Choose your registration type below to get started!
        </p>

        <div className="flex space-x-6">
          <button 
            onClick={hrfunction} 
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            HR Register
          </button>
          <button 
            onClick={userfunction} 
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            User Register
          </button>
        </div>
      </div>
    </div>
  </main>
</section>

        </>
    );
};
