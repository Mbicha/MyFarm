import React from "react";
import { Link } from "react-router-dom";

const ShowFarm = () => {
    return(
        <>
            <section className="flex flex-col items-center bg-green-900 h-full w-screen">
                <div className="flex flex-wrap">
                    {/* Product Card */}
                        <Link className="flex flex-row p-1 bg-white">
                            <img 
                                src="/media/products/download.jpeg" alt="product" 
                                className="h-12 w-12"/>
                            <div className="flex flex-row pl-1 font-semibold">
                                <h1 className="underline">
                                    Beef
                                </h1>
                            </div>
                        </Link>
                    {/* End Product Card */}
                </div>
            </section>
        </>
    )
}

export default ShowFarm;
