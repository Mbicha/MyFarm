import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <>
            <header
                className="flex flex-row justify-between bg-green-800 h-16 border-b border-yellow-600 shadow-md w-screen">
                    <Link to={`/`}>
                        <img src="/media/icons/menu-64.png" alt=""/>
                    </Link>
                    <div className="flex flex-row justify-center text-white items-center">
                        <Link to={`/dashboard`} className="p-2 hover:bg-yellow-500">Dashboard</Link>
                        <Link to={`/services`} className="p-2 hover:bg-yellow-500">Services</Link>
                        <Link to={`/about-us`} className="p-2 hover:bg-yellow-500">About Us</Link>
                        <Link to={`/`} className="pl-2 pr-2 mr-2 hover:bg-yellow-500">Profile</Link>
                    </div>
            </header>
        </>
    )
}

export default NavBar;
