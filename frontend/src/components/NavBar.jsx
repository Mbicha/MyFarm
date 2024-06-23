import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <>
            <header
                className="relative flex flex-row h-11/12 w-screen">
                    <Link to={`/`}>
                        <img src="/media/icons/menu-64.png" alt="" className="flex flex-col absolute top-3 left-3 z-10"/>
                    </Link>
                    <img src="/media/banners/maize.jpeg" alt="" className="w-1/2"/>
                    <img 
                        src="/media/banners/livestock.jpeg" alt="" 
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-72 w-72 z-10 border border-r border-green-100 p-1 rounded-full"/>
                    <img src="/media/banners/beefarming.jpeg" alt="" className="w-1/2"/>
            </header>
        </>
    )
}

export default NavBar;
