import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <>
            <header
                className="flex flex-row justify-start h-16 bg-green-800 w-screen">
                    <Link to={`/`}>
                        <img src="/media/icons/menu-64.png" alt=""/>
                    </Link>                    
            </header>
        </>
    )
}

export default NavBar;
