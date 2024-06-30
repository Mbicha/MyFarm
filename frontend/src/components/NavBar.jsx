import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header className="flex flex-row justify-between bg-green-800 h-16 shadow-md w-screen items-center">
        <div>
          {/* You can add a logo or site name here */}
          <Link to="/" className="text-white text-lg p-2">MyFarm</Link>
        </div>

        <div className="flex flex-row justify-center text-white items-center">
          {/* Hamburger menu icon for small screens */}
          <Link to={`/`} className="sm:flex lg:hidden md:hidden p-2">
            <img src="/media/icons/menu-64.png" alt="menu" className="h-8 w-8"/>
          </Link>

          {/* Links for medium and large screens */}
          <div className="hidden sm:flex">
            <Link to={`/dashboard`} className="p-2 hover:bg-yellow-500">Dashboard</Link>
            <Link to={`/services`} className="p-2 hover:bg-yellow-500">Services</Link>
            <Link to={`/about-us`} className="p-2 hover:bg-yellow-500">About Us</Link>
            <Link to={`/`} className="pl-2 pr-2 mr-2 rounded-full">
              <img src={`/media/profiles/profile.png`} alt="profile" className="h-12 w-12 rounded-full"/>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
