import React from "react";

const Index = () =>{
    return(
        <>
            <section
                className="flex flex-col bg-green-800 h-full w-screen">
                    <div className="relative h-auto w-full">
                        <img src="/media/banners/banner.svg" alt="" className="h-1/2 w-full"/>               
                        <div
                            className="absolute flex flex-col text-white top-8 left-4 w-1/2 z-20">
                                <h1 className="flex text-yellow-500 font-semibold text-2xl">
                                    MyFarm
                                </h1>
                                Manage my farm produces, monitor profits, visualize metrices with a pcket friendly budget of $. 30.00 per month.
                        </div>
                    </div>
                    {/* Services */}
                    <div className="">

                    </div>
            </section>
        </>
    )
}

export default Index;
