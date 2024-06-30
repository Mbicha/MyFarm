import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileClicked, setIsProfileClicked] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const tongleProfileMenu = () => {
    setIsProfileClicked(!isProfileClicked);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const closeProfileMenu = () => {
    setIsProfileClicked(false);
  }

  return (
    <>
      <header className="flex flex-row justify-between bg-green-800 h-16 shadow-md w-screen items-center">
        <div>
          {/* You can add a logo or site name here */}
          <Link to="/" className="text-white text-lg p-2">MyFarm</Link>
        </div>

        <div className="flex flex-row justify-center text-white items-center">
          {/* Hamburger menu icon for small screens */}
          <button onClick={handleMenuToggle} className="sm:flex md:hidden lg:hidden p-2">
            <img src="/media/icons/menu-64.png" alt="menu" className="h-8 w-8"/>
          </button>

          {/* Links for medium and large screens */}
          <div className="hidden sm:flex">
            <Link to={`/dashboard`} className="p-2 hover:bg-yellow-500">Dashboard</Link>
            <Link to={`/services`} className="p-2 hover:bg-yellow-500">Services</Link>
            <Link to={`/about-us`} className="p-2 hover:bg-yellow-500">About Us</Link>
            <Link to={`/`} className="pl-2 pr-2 mr-2 rounded-full">
              <img src={`/media/profiles/profile.png`} alt="profile" className="h-12 w-12 rounded-full"/>
            </Link>
          </div>

          {/* Links for small screens */}
          {isMenuOpen && (
            <div className="flex flex-col sm:hidden absolute top-16 left-0 bg-green-800 w-full z-40">
                <Link to={`/dashboard`} onClick={closeMenu} className="p-2 hover:bg-yellow-500">Dashboard</Link>
              <Link to={`/services`} onClick={closeMenu} className="p-2 hover:bg-yellow-500 border-b border-gray-700">Services</Link>
              <Link to={`/about-us`} onClick={closeMenu} className="p-2 hover:bg-yellow-500 border-b border-gray-700">About Us</Link>
              <Link to={`/`} onClick={tongleProfileMenu} className="p-2 hover:bg-yellow-500 border-b border-gray-700">
                <img src={`/media/profiles/profile.png`} alt="profile" className="h-12 w-12 rounded-full"/>
              </Link>
            </div>
          )}

          {/* Profile Links for small screens */}
          {isProfileClicked && (
            <div className="flex flex-col sm:hidden absolute top-16 left-0 bg-green-800 w-full z-50">
                <Link to={`/`} onClick={closeProfileMenu} className="p-2 hover:bg-yellow-500">Profile</Link>
                <Link to={`/`} onClick={closeProfileMenu} className="p-2 hover:bg-yellow-500 border-b border-gray-700">Logout</Link>
                
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default NavBar;
