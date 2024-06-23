import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <>
            <header
                className="relative flex flex-row h-11/12 w-screen">
                    <Link to={`/`}>
                        <img src="/media/icons/menu-64.png" alt="" className="flex flex-col absolute top-3 left-3 z-50"/>
                    </Link>
                    <img src="/media/banners/maize.jpeg" alt="" className="w-1/2"/>
                    <img 
                        src="/media/banners/cows.jpeg" alt="" 
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-72 w-72 z-10 border border-r border-green-100 p-1 rounded-full"/>
                    <img src="/media/banners/beefarming.jpeg" alt="" className="w-1/2"/>
                    <div
                        className="absolute flex flex-col text-white top-1/2 left-48 w-1/4 transform -translate-x-1/2 -translate-y-1/2 z-20">
                            <h1 className="flex text-yellow-400 font-semibold text-xl">
                                MyFarm
                            </h1>
                            Manage my farm produces, monitor profits, visualize metrices as low as $. 30 per month.
                    </div>
            </header>
        </>
    )
}

export default NavBar;
