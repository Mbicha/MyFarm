import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return(
        <>
            <section className="flex flex-col md:flex-row lg:flex-row items-center bg-green-800 h-dvh w-screen mt-2">
                <aside className="flex flex-col h-dvh w-1/3 p-2 m-6">
                    <div className="flex flex-col h-auto p-1">
                        <div className="flex flex-row justify-center items-center p-1 border bg-white">
                            <img src="/media/profiles/charles.jpg" alt="" srcset="" className="h-24 w-24 border rounded-full"/>
                            <h2 className="fonnt-semibold ml-2 text-gray-600">Charles Mbithi</h2>                            
                        </div>
                        <hr />
                        <Link to={`/`} className="bg-white items-center p-1 text-gray-600">
                            Sales: 0.00
                        </Link>       
                    </div>
                    {/* My Farm Info */}
                    <div className="flex flex-col bg-white mt-2 p-1">
                        <div className="flex flex-row justify-between border-b">
                            <h1 className="p-1 text-gray-600">
                                MyFarm
                            </h1>
                            <span className="text-green-800">Poutry Farming</span>
                        </div>                        
                        <Link to={`/create-farm`} className="mt-1 underline text-gray-600">Create Farm</Link>
                        <Link to={`/create-farm`} className="mt-1 underline text-gray-600">Add Farm Produces</Link>
                        <Link to={`/create-farm`} className="mt-1 underline text-gray-600">Show MyFarm</Link>                        
                    </div>
                    {/* Visualization */}
                    <Link to={`/create-farm`} className="mt-1 underline text-gray-600 bg-white p-1">Visualizations</Link>
                </aside>

                <div className="flex flex-col border h-dvh 2/3 p-2 m-6 w-full">
                    More Details
                </div>
            </section>
        </>
    )
}

export default Dashboard;
