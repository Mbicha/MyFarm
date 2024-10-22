import React, {useState, useEffect} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Barchart from "../visualizations/Barchart";
import http from "../http-common";

const Dashboard = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [dashboard, setDashbard] = useState([]);
    useEffect(() => {        
        const getDashboard = async () => {
            try {
                const response = await http.get(`/myfarm/farm/farms/${id}`);
                setDashbard(response.data.farms[0]);
                if(dashboard.full_name === undefined) {
                    navigate(`/create-farm/${id}`);
                }
            } catch (error) {
                console.log(error);                
            }
        }
        getDashboard()
    }, [])
    

    return (
        <>
            <section className="flex flex-col md:flex-row lg:flex-row items-center bg-green-900 h-dvh w-screen mt-2">
                <aside className="flex flex-col h-dvh w-full sm:w-1/3 p-2 m-6">
                    <div className="flex flex-col h-auto p-1">
                        <div className="flex flex-row justify-center items-center p-1 border bg-white">
                            <img src="/media/profiles/profile.png" alt="" srcSet="" className="h-24 w-24 border rounded-full" />
                            <h2 className="font-semibold ml-2 text-gray-600">{dashboard.full_name ? dashboard.full_name: "John Doe"}</h2>
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
                                {dashboard.farm_name ? dashboard.farm_name : "ChaFarm"}
                            </h1>
                            <span className="text-green-800">
                                {dashboard.specific_farming_type ? dashboard.specific_farming_type : "Cereal Farming"}
                            </span>
                        </div>
                        <Link to={`/create-farm/${id}`} className="mt-1 text-gray-600">Create Farm</Link>
                        <Link to={`/edit-farm-produce`} className="mt-1 text-gray-600">Edit Source/Harvest</Link>
                        <Link to={`/show-myfarm`} className="mt-1 text-gray-600">Show MyFarm</Link>
                    </div>
                    {/* Subscription Plan */}
                    <div className="flex flex-col bg-white mt-2 p-1">
                        <div className="flex flex-row justify-between border-b">
                            <h1 className="p-1 text-gray-600">
                                My Plan
                            </h1>
                            <span className="text-green-800">
                                {dashboard.plan_type ? dashboard.plan_type : "Basic"}
                            </span>
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
