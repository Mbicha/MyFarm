import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <>
            <header
                className="relative flex flex-row h-4/5 w-screen">
                    <Link to={`/`}>
                        <img src="/media/icons/menu-64.png" alt="" className="flex flex-col absolute top-3 left-3 z-50"/>
                    </Link>
                    <img src="/media/banners/banner.png" alt="" className="w-full"/>                   
                    <div
                        className="absolute flex flex-col top-1/2 left-48 w-1/4 transform -translate-x-1/2 -translate-y-1/2 z-20">
                            <h1 className="flex text-green-800 font-semibold text-xl">
                                MyFarm
                            </h1>
                            Manage my farm produces, monitor profits, visualize metrices as low as $. 30 per month.
                    </div>
            </header>
        </>
    )
}

export default NavBar;
