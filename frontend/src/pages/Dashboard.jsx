import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

// Add colors for the pie chart
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#a4de6c', '#d0ed57'];

const Dashboard = () => {
    const [timePeriod, setTimePeriod] = useState('daily');

    const data = {
        daily: [
            { name: 'Mon', sales: 400 },
            { name: 'Tue', sales: 300 },
            { name: 'Wed', sales: 500 },
            { name: 'Thu', sales: 200 },
            { name: 'Fri', sales: 278 },
            { name: 'Sat', sales: 189 },
            { name: 'Sun', sales: 239 },
        ],
        weekly: [
            { name: 'Week 1', sales: 1400 },
            { name: 'Week 2', sales: 1500 },
            { name: 'Week 3', sales: 1300 },
            { name: 'Week 4', sales: 1600 },
        ],
        monthly: [
            { name: 'Jan', sales: 4000 },
            { name: 'Feb', sales: 3000 },
            { name: 'Mar', sales: 5000 },
            { name: 'Apr', sales: 4000 },
            { name: 'May', sales: 6000 },
            { name: 'Jun', sales: 7000 },
            { name: 'Jul', sales: 8000 },
            { name: 'Aug', sales: 5000 },
            { name: 'Sep', sales: 4000 },
            { name: 'Oct', sales: 6000 },
            { name: 'Nov', sales: 7000 },
            { name: 'Dec', sales: 8000 },
        ],
        quarterly: [
            { name: 'Q1', sales: 12000 },
            { name: 'Q2', sales: 15000 },
            { name: 'Q3', sales: 18000 },
            { name: 'Q4', sales: 20000 },
        ],
        halfYearly: [
            { name: 'H1', sales: 30000 },
            { name: 'H2', sales: 40000 },
        ],
        yearly: [
            { name: '2023', sales: 70000 },
            { name: '2024', sales: 80000 },
        ],
    };

    const handleTimePeriodChange = (period) => {
        setTimePeriod(period);
    };
    

    return (
        <>
            <section className="flex flex-col md:flex-row lg:flex-row items-center bg-green-900 h-dvh w-screen mt-2">
                <aside className="flex flex-col h-dvh w-full sm:w-1/3 p-2 m-6">
                    <div className="flex flex-col h-auto p-1">
                        <div className="flex flex-row justify-center items-center p-1 border bg-white">
                            <img src="/media/profiles/charles.jpg" alt="" srcSet="" className="h-24 w-24 border rounded-full" />
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
                        <Link to={`/create-farm`} className="mt-1 underline text-gray-600">Create Farm</Link>
                        <Link to={`/create-farm`} className="mt-1 underline text-gray-600">Add Farm Produces</Link>
                        <Link to={`/create-farm`} className="mt-1 underline text-gray-600">Show MyFarm</Link>
                    </div>
                    {/* Subscription Plan */}
                    <div className="flex flex-col bg-white mt-2 p-1">
                        <Link to={`/subscription-plan`} className="mt-1 underline text-gray-600">Subscription Plan </Link>
                    </div>
                </aside>

                <div className="flex flex-col h-dvh p-2 m-6 w-full">
                    <h1 className="text-white text-xl sm:text-3xl">Welcome back, Charles Mbithi</h1>
                    <p className="flex text-gray-900">Monitor your business progress through various visualizations</p>
                    
                    <div className="flex flex-row justify-between mb-4 border p-1 bg-white">
                        <button 
                            className="flex justify-center bg-yellow-500 text-green-800 w-2/12 p-1 rounded-md"
                            onClick={() => handleTimePeriodChange(timePeriod)}>
                                Daily
                        </button>
                        <button
                            className="flex justify-center bg-yellow-500 text-green-800 w-2/12 p-1 rounded-md"
                            onClick={() => handleTimePeriodChange('weekly')}>
                                Weekly
                        </button>
                        <button
                            className="flex justify-center bg-yellow-500 text-green-800 w-2/12 p-1 rounded-md"
                            onClick={() => console.log("Clicked!!!")}>
                                Quarterly
                        </button>
                        <button
                            className="flex justify-center bg-yellow-500 text-green-800 w-2/12 p-1 rounded-md">
                                Yearly
                        </button>
                    </div>
                    <div className="flex flex-col border border-yellow-500 w-full h-96">
                        
                    </div>                    
                </div>
            </section>
        </>
    );
};

export default Dashboard;
