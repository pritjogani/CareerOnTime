import { useState } from "react";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Useregister = () => {
    const { storeTokenInLs } = useAuth();
    const [user, setUser] = useState({
        username: "",
        password: "",
        email: "",
        phone: "",
        city: "",
        college: "",
        age: "",
        companyname: "",
        cgpa: "",
        role:""
    });

    const navigate = useNavigate();

    // Handling input value
    const handleinput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    // Handling form submission
    const handlesubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        try {
            const response = await fetch(`http://localhost:5000/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const res_data = await response.json();
            if (response.ok) {
                storeTokenInLs(res_data.token);
                setUser({
                    username: "",
                    password: "",
                    email: "",
                    phone: "",
                    city: "",
                    college: "",
                    age: "",
                    cgpa: "",
                    role:""
                });
                toast.success("Registration successful");
                navigate("/");
            }
        } catch (error) {
            console.log("Something went wrong", error);
            toast.error("Registration failed. Please try again.");
        }
    };

    return (
        <>
            <section className="min-h-screen flex items-center justify-center min-h-screen bg-gray">
                <main className="w-full max-w-8xl mx-auto px-6 py-12">
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
                        {/* Image Section */}
                        <div className="registration-image flex justify-center items-center">
                            <img src="fill.png" alt="Registration Illustration" className="w-full max-w-4xl object-cover" />
                        </div>

                        {/* Form Section */}
                        <div className="registration-form w-full">
                            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Registration Form</h1>

                            <form onSubmit={handlesubmit} className="space-y-6 w-full">
                                {/* Username */}
                                <div>
                                    <label htmlFor="username" className="block text-lg font-medium text-gray-700">Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        placeholder="Enter your username"
                                        required
                                        autoComplete="off"
                                        value={user.username}
                                        onChange={handleinput}
                                        className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        required
                                        autoComplete="off"
                                        value={user.email}
                                        onChange={handleinput}
                                        className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone</label>
                                    <input
                                        type="number"
                                        name="phone"
                                        id="phone"
                                        placeholder="Enter phone number"
                                        required
                                        autoComplete="off"
                                        value={user.phone}
                                        onChange={handleinput}
                                        className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>

                                {/* Password */}
                                <div>
                                    <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter password"
                                        required
                                        autoComplete="off"
                                        value={user.password}
                                        onChange={handleinput}
                                        className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>

                             
                                {/* City */}
                                <div>
                                    <label htmlFor="city" className="block text-lg font-medium text-gray-700">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        placeholder="Enter your city"
                                        required
                                        autoComplete="off"
                                        value={user.city}
                                        onChange={handleinput}
                                        className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>

                                {/* College */}
                                <div>
                                    <label htmlFor="college" className="block text-lg font-medium text-gray-700">College</label>
                                    <input
                                        type="text"
                                        name="college"
                                        id="college"
                                        placeholder="Enter your college"
                                        required
                                        autoComplete="off"
                                        value={user.college}
                                        onChange={handleinput}
                                        className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>

                                {/* Age */}
                                <div>
                                    <label htmlFor="age" className="block text-lg font-medium text-gray-700">Age</label>
                                    <input
                                        type="number"
                                        name="age"
                                        id="age"
                                        placeholder="Enter your age"
                                        required
                                        autoComplete="off"
                                        value={user.age}
                                        onChange={handleinput}
                                        className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>


                                {/* CGPA */}
                                <div>
                                    <label htmlFor="cgpa" className="block text-lg font-medium text-gray-700">CGPA</label>
                                    <input
                                        type="text"
                                        name="cgpa"
                                        id="cgpa"
                                        placeholder="Enter your CGPA"
                                        required
                                        autoComplete="off"
                                        value={user.cgpa}
                                        onChange={handleinput}
                                        className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
                                >
                                    Register Now
                                </button>
                            </form>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};
