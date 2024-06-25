import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    return(
        <>
            <section className="flex flex-col items-center bg-green-800 h-full w-screen">
                <form className="flex flex-col p-2 bg-white w-auto">
                    <h1 className="flex justify-center text-2xl items-center bg-yellow-500 border-b-green-800 font-bold w-full">
                        Signup
                    </h1>
                    <input
                        type="text" 
                        name="first_name" 
                        placeholder="First Name" 
                        className="mt-2 border-b-gray-400 p-2"/>
                    
                    <input
                        type="text" 
                        name="last_name" 
                        placeholder="Last Name" 
                        className="mt-2 border-b-gray-400 p-2"/>

                    <input
                        type="text" 
                        name="email" 
                        placeholder="Email" 
                        className="mt-2 border-b-gray-400 p-2"/>
                    
                    <input
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        className="mt-2 border-b-gray-400 p-2"/>

                    <input
                        type="password" 
                        name="confirm_password" 
                        placeholder="Confirm Password" 
                        className="mt-2 border-b-gray-400 p-2"/>
                    
                    <input type="button" value="Signup" className="mt-2 bg-yellow-500 p-2"/>
                    <p className="flex justify-center">Already have an Account? <Link to={`/login`} className="underline">Login</Link></p>
                </form>
            </section>
        </>
    )
}

export default Signup;
