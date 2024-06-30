import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <>
            <footer className="flex flex-col h-auto w-screen mt-2 bg-green-900 text-white p-4">
                {/* <div className="flex flex-row">
                    <div>
                        <h1 className="flex flex-col text-yellow-500 underline text-2xl font-semibold">
                            About Us
                        </h1>                        
                    </div>
                </div> */}

                {/* Copyright */}
                {/* <div className="flex flex-row justify-center text-md align-bottom font-thin italic underline">
                    Developed by Charles Mbithi. MyFarm &copy; 2024
                </div> */}
            </footer>
        </>
    )
}

export default Footer;
