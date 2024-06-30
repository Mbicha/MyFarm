import React from "react";

const SubscriptionPlan = () => {
    return(
        <>
            <section className="flex flex-col items-center bg-green-900 h-dvh w-screen mt-2">
                <h1 className="underline text-white text-xl sm:text-3xl">Subscription Plan</h1>
                <p className="flex text-gray-900">Choose a plan that aligns with you farm.</p>

                <div className="flex flex-col lg:flex-row justify-between">
                    {/* Start Subsription Card */}
                    <div className="flex flex-col items-center h-auto bg-white rounded-lg p-1 shadow-lg m-1 w-full sm:w-4/5 md:w-4/5 lg:w-1/3">
                        <h2 className="flex justify-center text-2xl font-bold text-gray-900">Basic</h2>
                        <p className="flex text-gray-900">Ksh. 30/Month</p>
                        <div className="w-full border-b"></div>           
                        <div className="flex flex-row items-center w-auto p-1">
                            <img src="/media/icons/right.svg" alt="" className="w-9 h-9" />
                            <p className="text-gray-900 ml-1">Only Farm Management</p>
                        </div>
                        <div className="w-full border-b"></div>
                        <button className="flex w-2/3 justify-center bg-yellow-500 text-green-800 p-1 rounded-md m-1">Purchase</button>
                    </div>
                    {/* End of Subscriprion Card */}

                    {/* Start Subsription Card */}
                    <div className="flex flex-col items-center h-auto bg-white rounded-lg p-1 shadow-lg m-1 w-full sm:w-4/5 md:w-4/5 lg:w-1/3">
                        <h2 className="flex justify-center text-2xl font-bold text-gray-900">Standard</h2>
                        <p className="flex text-gray-900">Ksh. 1000/Month</p>
                        <div className="w-full border-b"></div>           
                        <div className="flex flex-row items-center w-auto p-1">
                            <img src="/media/icons/right.svg" alt="" className="w-9 h-9" />
                            <p className="text-gray-900 ml-1">Farm Management</p>
                        </div>
                        <div className="flex flex-row items-center w-auto p-1">
                            <img src="/media/icons/right.svg" alt="" className="w-9 h-9" />
                            <p className="text-gray-900 ml-1">Visualization</p>
                        </div>
                        <div className="w-full border-b"></div>
                        <button className="flex w-2/3 justify-center bg-yellow-500 text-green-800 p-1 rounded-md m-1">Purchase</button>
                    </div>
                    {/* End of Subscriprion Card */}
                    {/* Start Subsription Card */}
                    <div className="flex flex-col items-center h-auto bg-white rounded-lg p-1 shadow-lg m-1 w-full sm:w-4/5 md:w-4/5 lg:w-1/3">
                        <h2 className="flex justify-center text-2xl font-bold text-gray-900">Premium</h2>
                        <p className="flex text-gray-900">Ksh. 3000/Month</p>
                        <div className="w-full border-b"></div>           
                        <div className="flex flex-row items-center w-auto p-1">
                            <img src="/media/icons/right.svg" alt="" className="w-9 h-9" />
                            <p className="text-gray-900 ml-1">Farm Management</p>
                        </div>
                        <div className="flex flex-row items-center w-auto p-1">
                            <img src="/media/icons/right.svg" alt="" className="w-9 h-9" />
                            <p className="text-gray-900 ml-1">Visualization</p>
                        </div>
                        <div className="flex flex-row items-center w-auto p-1">
                            <img src="/media/icons/right.svg" alt="" className="w-9 h-9" />
                            <p className="text-gray-900 ml-1">Enquiries</p>
                        </div>
                        <div className="w-full border-b"></div>
                        <button className="flex w-2/3 justify-center bg-yellow-500 text-green-800 p-1 rounded-md m-1">Purchase</button>
                    </div>
                    {/* End of Subscriprion Card */}
                </div>

                
            </section>
        </>
    )
}

export default SubscriptionPlan;
