import React from "react";
import { Link } from "react-router-dom";
import Barchart from "../visualizations/Barchart";

const Dashboard = () => {

    return (
        <>
            <section className="flex flex-col md:flex-row lg:flex-row items-center bg-green-900 h-dvh w-screen mt-2">
                <aside className="flex flex-col h-dvh w-full sm:w-1/3 p-2 m-6">
                    <div className="flex flex-col h-auto p-1">
                        <div className="flex flex-row justify-center items-center p-1 border bg-white">
                            <img src="/media/profiles/profile.png" alt="" srcSet="" className="h-24 w-24 border rounded-full" />
                            <h2 className="font-semibold ml-2 text-gray-600">Charles Mbithi</h2>
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
                            <span className="text-green-800">Poultry Farming</span>
                        </div>
                        <Link to={`/create-farm`} className="mt-1 text-gray-600">Create Farm</Link>
                        <Link to={`/edit-farm-produce`} className="mt-1 text-gray-600">Edit Source/Harvest</Link>
                        <Link to={`/show-myfarm`} className="mt-1 text-gray-600">Show MyFarm</Link>
                    </div>
                    {/* Subscription Plan */}
                    <div className="flex flex-col bg-white mt-2 p-1">
                        <div className="flex flex-row justify-between border-b">
                            <h1 className="p-1 text-gray-600">
                                My Plan
                            </h1>
                            <span className="text-green-800">Basic</span>
                        </div>
                        <Link to={`/subscription-plan`} className="mt-1 text-gray-600">Subscription Plan </Link>
                    </div>
                </aside>

                <div className="flex flex-col h-dvh p-2 m-6 w-full">
                    <h1 className="text-white text-xl sm:text-3xl">Welcome back, Charles Mbithi</h1>
                    <p className="flex text-gray-900">Monitor your business progress through visualizations</p>

                    {/* Visualize Here */}
                    <Barchart />                
                </div>
            </section>            
        </>
    );
};

export default Dashboard;
