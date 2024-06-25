import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <>
            <footer className="flex flex-col h-1/5 w-screen bg-green-800 text-white p-4 bottom-0">
                <div className="flex flex-row">
                    <div>
                        <h1 className="flex flex-col text-yellow-500 underline text-2xl font-semibold">
                            About Us
                        </h1>                        
                    </div>
                </div>

                {/* Copyright */}
                <div className="flex flex-row justify-center text-2xl">
                    MyFarm &copy; 2024;
                </div>
            </footer>
        </>
    )
}

export default Footer;
