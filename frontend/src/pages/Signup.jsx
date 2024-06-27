import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    return(
        <>
            <section className="flex flex-col items-center bg-green-800 h-full w-screen">
                <form className="flex flex-col p-3 mt-2 bg-white w-auto rounded-lg">
                    <h1
                        className="flex justify-center text-yellow-500 text-2xl items-center rounded-tl-md rounded-tr-md border-b border-green-800 font-bold w-full">
                        Create Account
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

                    <div className="flex justify-center">
                        <input type="submit" value="Signup" className="mt-2 w-1/2 rounded-md bg-green-800 text-white p-1"/>
                    </div>
                    <p className="flex justify-center mt-1">Already have an Account? <Link to={`/login`} className="underline pl-1 pr-1 hover:bg-yellow-500">Login</Link></p>
                </form>
            </section>
        </>
    )
}

export default Signup;
