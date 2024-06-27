import React from "react";
import { Link } from "react-router-dom";

const Index = () =>{    
    return(
        <>
            <section
                className="flex flex-col bg-green-800 h-full w-screen">
                    <div className="relative h-auto w-full">
                        <img src="/media/banners/banner.svg" alt="" className="h-screen w-full"/>               
                        <div
                            className="absolute flex flex-col text-white top-8 left-4 w-full z-20 sm:w-1/2">
                                <h1 className="flex text-yellow-500 font-semibold text-2xl">
                                    MyFarm
                                </h1>
                                Manage my farm produces, monitor profits, visualize metrices with a pcket friendly budget of $. 30.00 per month.
                                <div className="flex flex-row pt-1">
                                    <Link to={`/create-farm`} className="flex justify-center mt-1 bg-yellow-500 p-2 rounded-md text-green-800 mr-2">Create Farm</Link>
                                    <Link to={`/signup`} className="flex justify-center mt-1 bg-yellow-500 p-2 rounded-md text-green-800">Login/Signup</Link>
                                </div>                                
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Index;
