import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <>
            <section className="flex flex-col items-center bg-green-800 h-full w-screen">
                <form className="flex flex-col p-2 bg-white w-auto">
                    <h1 className="flex justify-center text-2xl items-center bg-yellow-500 border-b-green-800 font-bold w-full">
                        Login
                    </h1>
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
                    
                    <input type="submit" value="Login" className="mt-2 bg-yellow-500 p-2"/>
                    <p className="flex justify-center">No Account? <Link to={`/signup`} className="underline">Signup</Link></p>
                </form>
            </section>
        </>
    )
}

export default Login;
