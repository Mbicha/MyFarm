import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import httpCommon from "../http-common";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    const handleFormChange = (event) =>{
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await httpCommon.post('/myfarm/auth/login', formData);
            const user_id = response.data.existing_user._id;
            
            navigate(`/dashboard/${user_id}`);
        } catch (error) {
            console.log(error);            
        }
    }

    return(
        <>
            <section className="flex flex-col items-center bg-green-900 h-full w-screen">
                <form className="flex flex-col p-3 rounded-lg mt-2 bg-white w-auto">
                    <h1 className="flex justify-center text-yellow-500 text-2xl rounded-tl-md rounded-tr-md items-center border-b border-green-800 font-bold w-full">
                        Login
                    </h1>
                    <input
                        type="text" 
                        name="email" 
                        placeholder="Email" 
                        className="mt-2 border-b-gray-400 p-2"
                        onChange={handleFormChange}/>
                    
                    <input
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        className="mt-2 border-b-gray-400 p-2"
                        onChange={handleFormChange}/>

                    <div className="flex justify-center">
                        <input 
                            type="submit" 
                            value="Login" 
                            className="mt-2 w-1/2 rounded-md bg-green-800 text-white p-1"
                            onClick={handleSubmit}/>
                    </div>
                    
                    <p className="flex justify-center mt-1">No Account? <Link to={`/signup`} className="underline pl-2 pr-1 hover:bg-yellow-500">Signup</Link></p>
                </form>
            </section>
        </>
    )
}

export default Login;
