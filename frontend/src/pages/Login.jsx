import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <>
            <section className="flex flex-col items-center bg-green-800 h-full w-screen">
                <form className="flex flex-col p-3 rounded-lg bg-white w-auto">
                    <h1 className="flex justify-center text-2xl rounded-tl-md rounded-tr-md items-center bg-yellow-500 border-b-green-800 font-bold w-full">
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

                    <div className="flex justify-center">
                        <input type="submit" value="Login" className="mt-2 w-1/2 rounded-md bg-green-800 text-white p-1"/>
                    </div>
                    
                    <p className="flex justify-center">No Account? <Link to={`/signup`} className="underline pl-2 pr-1 hover:bg-yellow-500">Signup</Link></p>
                </form>
            </section>
        </>
    )
}

export default Login;
